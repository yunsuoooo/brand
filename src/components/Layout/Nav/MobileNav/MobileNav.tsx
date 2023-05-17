import Image from "next/image";

import { cls } from "@/utils/tailwindUtil";
import { DarkmodeSwitch } from "@/components/Switch";
import useStore from "@/store/useStore";

interface MobileNavProps {
  height: number;
}

const MobileNav = ({ height }: MobileNavProps) => {
  const { isDarkTheme } = useStore();

  return (
    <div
      className={cls(
        "transition fixed bottom-0 bg-white dark:bg-primary-dark w-full flex justify-between items-end px-10 pb-4",
        `h-${height}`
      )}
    >
      <button
        type="button"
        className="transition flex flex-col items-center text-primary-dark dark:text-slate-200"
      >
        <Image
          src={`/images/${
            isDarkTheme ? "boy-front-gradient" : "boy-front-color"
          }.png`}
          width="40"
          height="40"
          alt="boy-icon"
        />
        <span className="text-center text-xs">Profile</span>
      </button>
      <button
        type="button"
        className="transition flex flex-col items-center text-primary-dark dark:text-slate-200"
      >
        <Image
          src={`/images/${
            isDarkTheme ? "file-text-front-gradient" : "file-text-front-color"
          }.png`}
          width="40"
          height="40"
          alt="home-icon"
        />
        <span className="text-center text-xs">Resume</span>
      </button>

      <div className="transition bg-white dark:bg-primary-dark p-3 rounded-full">
        <div className="transition bg-primary-dark h-min p-2.5 rounded-full dark:bg-white">
          <DarkmodeSwitch size={30} />
        </div>
      </div>

      <button
        type="button"
        className="transition flex flex-col items-center text-primary-dark dark:text-slate-200"
      >
        <Image
          src={`/images/${
            isDarkTheme ? "computer-front-gradient" : "computer-front-color"
          }.png`}
          width="40"
          height="40"
          alt="home-icon"
        />
        <span className="text-center text-xs">Project</span>
      </button>
      <button
        type="button"
        className="transition flex flex-col items-center text-primary-dark dark:text-slate-200"
      >
        <Image
          src={`/images/${
            isDarkTheme ? "at-front-gradient" : "at-front-color"
          }.png`}
          width="40"
          height="40"
          alt="home-icon"
        />
        <span className="text-center text-xs">Contact</span>
      </button>
    </div>
  );
};

export default MobileNav;
