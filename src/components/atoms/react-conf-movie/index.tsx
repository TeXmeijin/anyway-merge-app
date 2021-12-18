import React from "react";
import styles from "~/components/atoms/react-conf-movie/styles.module.css";

const ReactConfMovie: React.FC = () => {
  const title = "YouTube video player";
  const url = "https://www.youtube.com/embed/8dUpL8SCO1w?autoplay=1&mute=1";
  const frameBorder = "0";
  const allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;";

  return (
    <div className={styles.react_conf_movie}>
      <div className={styles.iframe_wrapper}>
        <iframe
          src={url}
          title={title}
          frameBorder={frameBorder}
          allow={allow}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ReactConfMovie;
