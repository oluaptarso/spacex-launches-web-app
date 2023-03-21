import { useCardsData } from "@/hooks/useCardsData";
import APIDefaultError from "../common/error/error";
import LaunchCard from "../launch-card/launch-card";
import LaunchCardSkeleton from "../launch-card/skeleton/launch-card.skeleton";
import styles from "./home-launch-cards.module.scss";

type HomeLaunchCardsProps = {
  className?: string;
};

const HomeLaunchCards: React.FC<HomeLaunchCardsProps> = ({
  className = "",
}) => {
  const { data, loading, error } = useCardsData();

  if (loading)
    return (
      <section className={`${className}`}>
        <LaunchCardSkeleton className={styles.card} />
        <LaunchCardSkeleton className={styles.card} />
      </section>
    );

  if (error)
    return (
      <section className={`${className}`}>
        <APIDefaultError />
      </section>
    );

  if (data) {
    return (
      <section className={`${className}`}>
        <LaunchCard className={styles.card} launch={data?.latest} />
        <LaunchCard className={styles.card} launch={data?.next} />
      </section>
    );
  }

  return <></>;
};

export default HomeLaunchCards;
