import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Provider } from "react-redux";
import Snowfall from "react-snowfall";
import { VFXProvider } from "react-vfx";
import type { AppProps } from "next/app";
import { store } from "~/app/store";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isFalling, setIsFalling] = useState(true);

  const handleChangeFallingButton = () => {
    setIsFalling((prevValue) => !prevValue);
  };

  return (
    <SessionProvider session={pageProps.session}>
      <VFXProvider>
        <Provider store={store}>
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
            <Component {...pageProps} />
          </div>
        </Provider>
      </VFXProvider>
    </SessionProvider>
  );
}

export default MyApp;
