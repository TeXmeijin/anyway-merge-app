import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { VFXProvider } from 'react-vfx';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <VFXProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </VFXProvider>
    </SessionProvider>
  );
}

export default MyApp;
