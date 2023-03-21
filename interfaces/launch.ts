import LaunchLink from "./launch-link";

export default interface Launch {
  id: string;
  flight_number: number;
  name: string;
  details: null | string;
  date_utc: Date;
  date_unix: number;
  upcoming: boolean;
  success: null | boolean;
  links?: LaunchLink;
}
