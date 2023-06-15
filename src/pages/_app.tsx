import type { AppProps } from "next/app";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={"min-h-screen"}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
