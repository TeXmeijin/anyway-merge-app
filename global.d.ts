type Layout = (page: ReactElement) => ReactNode;

type WithLayout<P> = P & {
    layout?: Layout;
  };

declare module 'https://*';
