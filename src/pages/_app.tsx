import "../styles/globals.css";
import type { AppProps } from "next/app";
import { VFXProvider } from "react-vfx";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <VFXProvider>
        <Component {...pageProps} />
      </VFXProvider>
    </SessionProvider>
  );
}

export default MyApp;
