import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <body className="transition min-h-screen bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
