import { Metadata } from "next";

import Provider from "./provider";
import "./global.css";
import { Layout } from "@/components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </head>
      <body className="transition min-h-screen bg-black text-white">
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
