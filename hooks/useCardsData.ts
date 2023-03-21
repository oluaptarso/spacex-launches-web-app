import { useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import { useSetState } from "./useSetState";
import CardsData from "@/interfaces/cards-data";
import ResponseOutput from "@/interfaces/response-object";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface IUseCardsDataState {
  data?: CardsData;
  loading: boolean;
  error?: AxiosError | Error | unknown;
}

export const useCardsData = () => {
  const [state, setState] = useSetState<IUseCardsDataState>({
    loading: false,
  });

  const fetch = useCallback(async () => {
    setState({ loading: true });
    try {
      const { data } = await axios.get<ResponseOutput<CardsData>>(
        `${API_URL}/spacex-api/launches/next_and_latest`
      );
      if (data.success) {
        setState({ data: data.data, loading: false });
      }
    } catch (error) {
      setState({ error, loading: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, refetch: fetch };
};
