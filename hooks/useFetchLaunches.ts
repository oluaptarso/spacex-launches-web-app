import { useEffect, useCallback, useRef } from "react";
import axios, { AxiosError } from "axios";
import { useSetState } from "./useSetState";
import CardsData from "@/interfaces/cards-data";
import ResponseOutput from "@/interfaces/response-object";
import Launch from "@/interfaces/launch";
import { PaginatedResponse } from "@/interfaces/paginated-response";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface IUseFetchLunchesState {
  responseData?: PaginatedResponse<Launch>;
  items: Launch[];
  loading: boolean;
  error?: AxiosError | Error | unknown;
}

export enum FetchType {
  Upcoming,
  Past,
}

export const useFetchLaunches = (fetchType: FetchType, page: number) => {
  const [state, setState] = useSetState<IUseFetchLunchesState>({
    loading: true,
    items: [],
  });

  const fetch = useCallback(async () => {
    setState({ loading: true });
    try {
      const { data } = await axios.get<
        ResponseOutput<PaginatedResponse<Launch>>
      >(
        `${API_URL}/spacex-api/launches/${
          fetchType == FetchType.Upcoming ? "upcoming" : "past"
        }`,
        {
          params: {
            page: page,
          },
        }
      );
      if (data.success && data.data?.docs) {
        setState({
          responseData: data.data,
          loading: false,
          items: [...state.items, ...data.data?.docs],
        });
      }
    } catch (error) {
      setState({ error, loading: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    fetch();
  }, [fetch, page]);

  return { ...state };
};
