import { Noto_Sans_KR, Varela_Round } from "next/font/google";

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
      className={`min-h-screen py-8 px-4 ${notoSansKr.className} ${varelaRound.className}`}
    >
      <h1 className="nfont-varelaRound leading-none">
        <span className="text-3xl -ml-0.5">{"Frontend Developer"}</span>
        <br />I am interested in blockchain now.
      </h1>
      <div className="flex justify-center p-4">
        <div className="bg-slate-400 rounded-full w-40 h-40" />
      </div>
    </main>
  );
};

export default Home;
