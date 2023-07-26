import { ReactNode } from "react";
import { Noto_Sans_KR, Varela_Round } from "next/font/google";

import { cls } from "@/utils/tailwindUtil";
import { Header } from "./Header";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--varelaRound",
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main
        className={cls(
          "flex flex-col items-center transition min-h-screen p-8 gap-8",
          notoSansKr.className,
          varelaRound.className
        )}
      >
        <div className="w-full lg:w-screen-lg">{children}</div>
      </main>
    </>
  );
};

export default Layout;
