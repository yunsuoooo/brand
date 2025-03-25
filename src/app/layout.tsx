import { Metadata } from "next";

import Provider from "./provider";
import { Navigation } from "@/widgets/layout/ui";

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
      <body className="bg-background text-foreground">
        <Navigation />

        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "yunsu Lim - personal Site",
  description: "Building better systems through code. One commit at a time.",
};
