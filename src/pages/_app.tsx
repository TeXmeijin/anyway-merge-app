import "../styles/globals.css";
import type { AppProps } from "next/app";
import { VFXProvider } from 'react-vfx';

function MyApp({ Component, pageProps }: AppProps) {
  return <VFXProvider><Component {...pageProps} /></VFXProvider>
}

export default MyApp;
