import "~/styles/globals.css";
import { BaseProvider, LightTheme } from "baseui";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { VFXProvider } from "react-vfx";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import type { AppProps } from "next/app";
import { store } from "~/app/store";
import SnowfallLayout from "~/components/templates/SnowfallLayout";

type Props = AppProps & {
  Component: {
    layout?: Layout;
  };
};

function MyApp({ Component, pageProps }: Props) {
  const { layout = (page) => page } = Component;
  return (
    <SessionProvider session={pageProps.session}>
      <VFXProvider>
        <Provider store={store}>
          <StyletronProvider value={styletron}>
            <BaseProvider theme={LightTheme}>
              <SnowfallLayout>
                {layout(<Component {...pageProps} />)}
              </SnowfallLayout>
            </BaseProvider>
          </StyletronProvider>
        </Provider>
      </VFXProvider>
    </SessionProvider>
  );
}

export default MyApp;
