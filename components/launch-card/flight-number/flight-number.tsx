import { LaunchStatus } from "@/enums/launch-status";
import styles from "./flight-number.module.scss";

type FlightNumberProps = {
  flightNumber: number;
  status: LaunchStatus;
};

const FlightNumber: React.FC<FlightNumberProps> = ({
  flightNumber,
  status,
}) => {
  return (
    <div
      className={`${styles.flightNumber} bg-${status}`}
    >
      {flightNumber}
    </div>
  );
};

export default FlightNumber;
