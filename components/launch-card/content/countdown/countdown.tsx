import useCountdown from "@/hooks/useCountdown";
import styles from "./countdown.module.scss";

const Countdown: React.FC<{ launchDate: Date }> = ({ launchDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(launchDate);

  return (
    <div className={styles.countdown}>
      <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>:
      <span>{seconds}s</span>
    </div>
  );
};

export default Countdown;
