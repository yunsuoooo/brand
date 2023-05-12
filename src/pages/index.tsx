import { Noto_Sans_KR, Varela_Round } from "next/font/google";
import Image from "next/image";

import { cls } from "@/utils/tailwindUtil";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--varelaRound",
});

const Home = () => {
  return (
    <main
      className={cls(
        "transition dark:text-slate-200  bg-white dark:bg-primary-dark min-h-screen p-8 flex flex-col gap-8",
        notoSansKr.className,
        varelaRound.className
      )}
    >
      <div>
        <h1 className="font-varelaRound leading-none text-3xl -ml-0.5">
          Frontend Developer
        </h1>
        <h2 className="text-2xl">Yunsu Lim</h2>
      </div>
      <div className="h-30 rounded-lg overflow-hidden">
        <Image
          className="rounded-lg"
          src="/images/me.png"
          alt="me"
          width="1080"
          height="1080"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-8">
        <div className="flex justify-center p-8 bg-yellow-200/90 rounded-2xl">
          <Image
            src="/images/setting-dynamic-gradient.png"
            width="100"
            height="100"
            alt="setting-3d-icon"
          />
        </div>
        <div className="flex justify-center p-8 bg-yellow-200/90 rounded-2xl">
          <Image
            src="/images/sheild-dynamic-gradient.png"
            width="100"
            height="100"
            alt="sheild-3d-icon"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
