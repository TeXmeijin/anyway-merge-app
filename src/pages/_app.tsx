import "~/styles/globals.css";
import { LightTheme, BaseProvider } from "baseui";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { VFXProvider } from "react-vfx";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import type { AppProps } from "next/app";
import { store } from "~/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <VFXProvider>
        <Provider store={store}>
          <StyletronProvider value={styletron}>
            <BaseProvider theme={LightTheme}>
              <Component {...pageProps} />
            </BaseProvider>
          </StyletronProvider>
        </Provider>
      </VFXProvider>
    </SessionProvider>
  );
}

export default MyApp;
