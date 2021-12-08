import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import Snowfall from "react-snowfall";
import { VFXProvider } from "react-vfx";
import type { AppProps } from "next/app";
import { store } from "~/app/store";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <VFXProvider>
        <Provider store={store}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Snowfall />
            <Component {...pageProps} />
          </div>
        </Provider>
      </VFXProvider>
    </SessionProvider>
  );
}

export default MyApp;
