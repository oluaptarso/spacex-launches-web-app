import { LaunchStatus } from "@/enums/launch-status";
import { formatDate } from "@/utils/format";
import styles from "./launch-item-date.module.scss";

type LaunchItemDateProp = {
  launchDate: Date | number;
  status: LaunchStatus;
};

const LaunchItemDate: React.FC<LaunchItemDateProp> = ({
  launchDate,
  status,
}) => {
  return (
    <div className={`${styles.launchItemDate} bg-${status}`}>
      <div>
        {`${formatDate(launchDate, "MMM")} ${formatDate(launchDate, "D")}`}
      </div>
      <div>{`${formatDate(launchDate, "YYYY")}`}</div>
    </div>
  );
};

export default LaunchItemDate;
