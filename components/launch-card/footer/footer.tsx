import LaunchLink from "@/interfaces/launch-link";
import { formatDate } from "@/utils/format";
import moment from "moment";
import Actions from "./actions/actions";
import styles from "./footer.module.scss";

const Footer: React.FC<{ links: LaunchLink | undefined; launchDate: Date }> = ({
  links,
  launchDate,
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.date}>{formatDate(launchDate,"lll")}</div>
      {links && <Actions links={links} />}
    </div>
  );
};

export default Footer;
