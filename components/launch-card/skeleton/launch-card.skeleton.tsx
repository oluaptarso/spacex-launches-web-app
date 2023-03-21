import styles from "./launch-card.skeleton.module.scss";

type LaunchCardSkeletonProps = {
  className?: string;
};

const LaunchCardSkeleton: React.FC<LaunchCardSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className} ${styles.card}`}>
      <div className={styles.flightNumber}></div>
      <div className={styles.content}>
        <div className={styles.title}></div>
        <div className={styles.name}></div>
        <div className={styles.status}></div>
      </div>
    </div>
  );
};

export default LaunchCardSkeleton;
