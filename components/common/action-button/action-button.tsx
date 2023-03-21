import { IconType } from "react-icons/lib";
import styles from "./action-button.module.scss";

type ActionButtonProps = {
  href: string | null;
  disabled: boolean;
  icon: IconType;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  disabled,
  icon,
}) => {
  return (
    <a
      className={`${styles.actionButton} ${disabled ? styles.disabled : ""}`}
      href={href || ""}
      target="_blank"
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
    >
      {icon({})}
    </a>
  );
};

export default ActionButton;
