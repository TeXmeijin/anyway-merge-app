import React, { useRef } from "react";
import Draggable from "react-draggable";
import styles from "./styles.module.css";
import LottieAnimation from "~/components/atoms/lottie-animation";

export const getChristmasLayout =
  (): Layout =>
  // eslint-disable-next-line react/display-name
  (page) => {
    const doorRef = useRef(null);
    const santaRef = useRef(null);
    const treeRef = useRef(null);
    return (
      <>
        <Draggable nodeRef={doorRef}>
          <div ref={doorRef} className={styles.door}>
            <LottieAnimation name="doorDecoration" height={50} width={50} />
          </div>
        </Draggable>
        <Draggable nodeRef={santaRef}>
          <div ref={santaRef} className={styles.santa}>
            <LottieAnimation name="santa" height={50} width={50} />
          </div>
        </Draggable>
        <Draggable nodeRef={treeRef}>
          <div ref={treeRef} className={styles.tree}>
            <LottieAnimation name="tree" height={50} width={50} />
          </div>
        </Draggable>
        {page}
      </>
    );
  };
