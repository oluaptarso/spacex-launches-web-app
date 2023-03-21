import React from "react";
import styles from "./launches-loading.module.scss";

const LaunchesLoading = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className={styles.loading}>Loading...</div>;
});

LaunchesLoading.displayName = "LaunchesLoading";

export default LaunchesLoading;
