import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  iconUrl?: string;
};

const ContributerHeading = (props: Props) => {
  const { children, iconUrl } = props;
  const iconSize = 50;

  return (
    <div className={styles.wrapper}>
      {iconUrl && (
        <img
          width={iconSize}
          height={iconSize}
          className={styles.icon}
          src={iconUrl}
          alt="icon"
        />
      )}
      <h1 className={styles.container}>{children}</h1>
    </div>
  );
};

export default ContributerHeading;
