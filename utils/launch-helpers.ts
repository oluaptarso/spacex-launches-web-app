import { LaunchStatus } from "@/enums/launch-status";
import Launch from "@/interfaces/launch";

export const getLaunchStatus = (launch: Launch): LaunchStatus => {
  if (launch.upcoming) return LaunchStatus.Upcoming;
  if (launch.success) return LaunchStatus.Success;
  else return LaunchStatus.Fail;
};
