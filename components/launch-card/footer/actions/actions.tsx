import ActionButton from "@/components/common/action-button/action-button";
import LaunchLink from "@/interfaces/launch-link";
import styles from "./actions.module.scss";
import { FaWikipediaW, FaYoutube, FaBookOpen } from "react-icons/fa";

const Actions: React.FC<{ links: LaunchLink }> = ({ links }) => {
  return (
    <div className={styles.actions}>
      <ActionButton disabled={!links.article} href={links.article} icon={FaBookOpen} />
      <ActionButton disabled={!links.youtube_id} href={`https://www.youtube.com/watch?v=${links.youtube_id}`} icon={FaYoutube} />
      <ActionButton disabled={!links.wikipedia} href={links.wikipedia} icon={FaWikipediaW} />
    </div>
  );
};

export default Actions;