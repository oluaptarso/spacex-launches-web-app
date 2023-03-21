import LaunchItem from "./launch-item/launch-item";
import styles from "./launches.module.scss";
import { FetchType, useFetchLaunches } from "@/hooks/useFetchLaunches";
import { useCallback, useState } from "react";
import { useCallbackRef } from "use-callback-ref";
import LaunchesLoading from "./launches-loading/launches-loading";
import APIDefaultError from "../common/error/error";

type LaunchesProps = {
  fetchType: FetchType;
  className?: string;
};

const Launches: React.FC<LaunchesProps> = ({ fetchType, className = "" }) => {
  const [page, setPage] = useState(1);
  const { items, responseData, loading, error } = useFetchLaunches(
    fetchType,
    page
  );

  const loader = useCallbackRef<HTMLDivElement>(null, (ref) => {
    if (ref) {
      const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleObserver, option);
      observer.observe(ref);
    }
  });

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  if (loading && items.length === 0)
    return (
      <div className={`${className} ${styles.launches}`}>
        <h1 className={styles.title}>
          {fetchType == FetchType.Upcoming
            ? "Upcoming Launches"
            : "Previous Launches"}
        </h1>
        <ul className={styles.launches}>
          <LaunchesLoading />
        </ul>
      </div>
    );

  if (error)
    return (
      <section className={`${className}`}>
        <APIDefaultError />
      </section>
    );

  if (responseData) {
    return (
      <div className={`${className} ${styles.launches}`}>
        <h1 className={styles.title}>
          {fetchType == FetchType.Upcoming
            ? "Upcoming Launches"
            : "Previous Launches"}
        </h1>
        <ul>
          {items.map((launch, i) => (
            <LaunchItem
              className={styles.launchItem}
              key={`${fetchType}-${i}`}
              launch={launch}
            />
          ))}
          <li>
            {responseData.hasNextPage && <LaunchesLoading ref={loader} />}
          </li>
        </ul>
      </div>
    );
  }

  return <></>;
};

export default Launches;
