import styles from "./launch-item-status.module.scss";

type LaunchItemStatusProp = {
  upcoming: boolean;
  success: boolean | null;
};

const LaunchItemStatus: React.FC<LaunchItemStatusProp> = ({
  upcoming,
  success = false,
}) => {
  if (upcoming) return <></>;

  return (
    <div className={styles.launchItemStatus}>
      {success ? (
        <span className="success">Successful Launch</span>
      ) : (
        <span className="fail">Launch Failure</span>
      )}
    </div>
  );
};

export default LaunchItemStatus;
