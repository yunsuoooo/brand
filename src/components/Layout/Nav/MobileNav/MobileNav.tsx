import Image from "next/image";

import { cls } from "@/utils/tailwindUtil";
import { DarkmodeSwitch } from "@/components/Switch";

interface MobileNavProps {
  height: number;
}

const MobileNav = ({ height }: MobileNavProps) => {
  return (
    <div
      className={cls(
        "transition fixed bottom-0 bg-white dark:bg-primary-dark w-full flex justify-between items-end px-10 pb-4",
        `h-${height}`
      )}
    >
      <div className="transition flex flex-col items-center text-primary-dark dark:text-slate-200">
        <Image
          src="/images/boy-front-gradient.png"
          width="40"
          height="40"
          alt="boy-icon"
        />
        <span className="text-center text-xs">Profile</span>
      </div>
      <div className="transition flex flex-col items-center text-primary-dark dark:text-slate-200">
        <Image
          src="/images/computer-front-gradient.png"
          width="40"
          height="40"
          alt="home-icon"
        />
        <span className="text-center text-xs">Project</span>
      </div>
      <div className="transition bg-white dark:bg-primary-dark p-3 rounded-full">
        <div className="transition bg-primary-dark h-min p-2.5 rounded-full dark:bg-white">
          <DarkmodeSwitch size={30} />
        </div>
      </div>
      <div className="transition flex flex-col items-center text-primary-dark dark:text-slate-200">
        <Image
          src="/images/file-text-front-gradient.png"
          width="40"
          height="40"
          alt="home-icon"
        />
        <span className="text-center text-xs">Resume</span>
      </div>
      <div className="transition flex flex-col items-center text-primary-dark dark:text-slate-200">
        <Image
          src="/images/at-front-gradient.png"
          width="40"
          height="40"
          alt="home-icon"
        />
        <span className="text-center text-xs">Contact</span>
      </div>
    </div>
  );
};

export default MobileNav;
