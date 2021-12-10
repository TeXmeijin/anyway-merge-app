import React, { useEffect, useState } from "react";
import styles from "~/components/atoms/react-conf-movie/styles.module.css";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";

const ReactConfMovie: React.FC = () => {
  const title = "YouTube video player";
  const url = "https://www.youtube.com/embed/8dUpL8SCO1w?autoplay=1&mute=1";
  const frameBorder = "0";
  const allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;";
  const { width } = useWindowDimensions();
  const [movieWidth, setMovieWidth] = useState<number>();
  const [movieHeight, setMovieHeight] = useState<number>();
  // 16:9
  const aspectRatio = 0.5625;

  useEffect(() => {
    let defaultWidth = 560;
    if (width < 768) {
      defaultWidth = 400;
    }
    setMovieWidth(defaultWidth);
    setMovieHeight(defaultWidth * aspectRatio);
  }, []);

  return (
    <div className={styles.react_conf_movie}>
      <iframe
        width={`${movieWidth}`}
        height={`${movieHeight}`}
        src={url}
        title={title}
        frameBorder={frameBorder}
        allow={allow}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ReactConfMovie;
