import { Metadata } from "next";

import Provider from "./provider";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </head>
      <body className="transition min-h-screen overflow-hidden bg-background text-foreground">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "yunsu Lim - personal Site",
  description: "Nothing special, yet somehow, everything is.",
};
