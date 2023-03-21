import Actions from "@/components/launch-card/footer/actions/actions";
import Launch from "@/interfaces/launch";
import { getLaunchStatus } from "@/utils/launch-helpers";
import LaunchItemDate from "./launch-item-date/launch-item-date";
import LaunchItemName from "./launch-item-name/launch-item-name";
import styles from "./launch-item.module.scss";

type LaunchItemProps = {
  launch: Launch;
  className?: string;
};

const LaunchItem: React.FC<LaunchItemProps> = ({ launch, className = "" }) => {
  return (
    <li className={`${className} ${styles.launch}`}>
      <LaunchItemDate launchDate={launch.date_utc} status={getLaunchStatus(launch)} />
      <LaunchItemName name={launch.name} flightNumber={launch.flight_number} />
      <div className={styles.actions}>
        {launch.links && <Actions links={launch.links} />}
      </div>
    </li>
  );
};

export default LaunchItem;
