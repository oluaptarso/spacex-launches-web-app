import styles from "./content.module.scss";
import Countdown from "./countdown/countdown";

const Warning: React.FC = () => {
  return (
    <span className={styles.warning}>The SpaceX-API may be outdated</span>
  );
};

const Content: React.FC<{
  name: string;
  launchDate: Date;
  upcoming: boolean;
  success: boolean | null;
  details: string | null;
}> = ({ name, launchDate, upcoming, success = false, details }) => {
  const greaterThanToday = launchDate > new Date();

  return (
    <div className={styles.content}>
      <h2>{upcoming ? "Next Launch" : "Previous Launch"}</h2>
      <div className={styles.name}>{name}</div>
      {upcoming ? (
        greaterThanToday ? (
          <Countdown launchDate={launchDate} />
        ) : (
          <Warning />
        )
      ) : success ? (
        <span className={`${styles.status} ${styles.success}`}>
          Successful Launch
        </span>
      ) : (
        <span className={`${styles.status} ${styles.fail}`}>
          Launch Failure
        </span>
      )}
    </div>
  );
};

export default Content;
