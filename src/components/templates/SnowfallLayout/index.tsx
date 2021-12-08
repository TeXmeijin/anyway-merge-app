import Image from "next/image";
import { ReactNode, useState } from "react";
import Snowfall from "react-snowfall";
// import styles from "./styles.module.css";

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
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isFalling && <Snowfall />}
      <div
        style={{
          width: "70px",
          position: "absolute",
          bottom: "10px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={handleChangeFallingButton}
      >
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
            alt="雪だるま"
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
