import Launch from "@/interfaces/launch";
import { getLaunchStatus } from "@/utils/launch-helpers";
import Content from "./content/content";
import FlightNumber from "./flight-number/flight-number";
import Footer from "./footer/footer";
import styles from "./launch-card.module.scss";

type LaunchCardProps = {
  launch: Launch;
  className?: string;
};

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, className = "" }) => {

  return (
    <div className={`${className} ${styles.card}`}>
      <FlightNumber
        status={getLaunchStatus(launch)}
        flightNumber={launch.flight_number}
      />
      <Content
        name={launch.name}
        upcoming={launch.upcoming}
        launchDate={launch.date_utc}
        success={launch.success}
        details={launch.details}
      />
      <Footer launchDate={launch.date_utc} links={launch.links} />
    </div>
  );
};

export default LaunchCard;
