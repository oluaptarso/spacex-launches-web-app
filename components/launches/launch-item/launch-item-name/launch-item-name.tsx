import styles from "./launch-item-name.module.scss";

type LaunchItemNameProp = {
  name: string;
  flightNumber: number;
};

const LaunchItemName: React.FC<LaunchItemNameProp> = ({
  name,
  flightNumber,
}) => {
  return (
    <div className={styles.launchItemName}>{`${flightNumber} - ${name}`}</div>
  );
};

export default LaunchItemName;
