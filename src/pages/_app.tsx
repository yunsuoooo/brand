import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { MobileNav } from "@/components/Layout/Nav";

const MOBILE_NAV_HEIGHT = 20;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className={`pb-${MOBILE_NAV_HEIGHT}`}>
        <Component {...pageProps} />
      </div>

      <MobileNav height={MOBILE_NAV_HEIGHT} />
    </>
  );
};

export default App;
