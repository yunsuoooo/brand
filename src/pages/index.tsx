import { Noto_Sans_KR, Varela_Round } from "next/font/google";
import Image from "next/image";

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
      className={`min-h-screen p-8 ${notoSansKr.className} ${varelaRound.className}`}
    >
      <h1 className="nfont-varelaRound leading-none">
        <span className="text-3xl -ml-0.5">{"Frontend Developer"}</span>
        <br />I am interested in blockchain now.
      </h1>
      <div className="flex justify-center p-4">
        <div className="bg-slate-400 rounded-full w-40 h-40" />
      </div>
      <div className="w-full grid grid-cols-2 gap-8">
        <div className="flex justify-center p-8 bg-yellow-200/90 rounded-2xl">
          <Image
            src="/images/megaphone-dynamic-color.png"
            width="100"
            height="100"
            alt="megaphone"
          />
        </div>
        <div className="flex justify-center p-8 bg-yellow-200/90 rounded-2xl">
          <Image
            src="/images/sheild-dynamic-gradient.png"
            width="100"
            height="100"
            alt="megaphone"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
