import Image from "next/image";
import { ReactNode, useState } from "react";
import Snowfall from "react-snowfall";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const SnowfallLayout = (props: Props) => {
  const { children } = props;

  const [isFalling, setIsFalling] = useState(true);

  const handleChangeFallingButton = () => {
    setIsFalling((prevValue) => !prevValue);
  };

  return (
    <div className={styles.container}>
      {isFalling && <Snowfall />}
      <div className={styles.imageWrapper} onClick={handleChangeFallingButton}>
        {isFalling ? (
          <Image
            src="/images/snowman_yukidaruma_man.png"
            alt="雪だるま"
            width="695"
            height="800"
          />
        ) : (
          <Image
            src="/images/snowman_yukidaruma_tokeru.png"
            alt="とけた雪だるま"
            width="683"
            height="683"
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default SnowfallLayout;
