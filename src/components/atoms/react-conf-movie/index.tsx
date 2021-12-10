import React from "react";
import styles from "~/components/atoms/react-conf-movie/styles.module.css";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";

const ReactConfMovie: React.FC = () => {
  const { width } = useWindowDimensions();
  // height / width
  const aspectRatio = 0.5625;

  const url = "https://www.youtube.com/embed/8dUpL8SCO1w?autoplay=1&mute=1";
  const movieWidth = width == 0 ? 560 : width * 0.38;
  const movieHeight = movieWidth * aspectRatio;

  const frameBorder = "0";
  const allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;";

  return (
    <div className={styles.react_conf_movie}>
      <iframe
        width={`${movieWidth}`}
        height={movieHeight}
        src={url}
        title="YouTube video player"
        frameBorder={frameBorder}
        allow={allow}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ReactConfMovie;
