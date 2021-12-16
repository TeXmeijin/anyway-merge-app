import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  iconUrl?: string;
};

const ContributerHeading = (props: Props) => {
  const { children, iconUrl } = props;
  const iconSize = 128;

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
      {children}
    </div>
  );
};

export default ContributerHeading;
