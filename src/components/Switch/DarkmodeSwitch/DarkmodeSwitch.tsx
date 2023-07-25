import { memo, useEffect } from "react";
import Image from "next/image";

import useStore from "@/store/useStore";

interface DarkmodeSwitchProps {
  size: number;
}

const DarkmodeSwitch = ({ size }: DarkmodeSwitchProps) => {
  const { isDarkTheme, setInitialColorTheme, changeColorTheme } = useStore();

  useEffect(() => {
    setInitialColorTheme();
  }, [setInitialColorTheme]);

  return (
    <label className="flex flex-col justify-center text-black dark:text-white">
      <input
        className="hidden"
        type="checkbox"
        role="switch"
        checked={isDarkTheme}
        onChange={changeColorTheme}
      />
      <Image
        src={`/images/${
          isDarkTheme ? "star-front-gradient" : "sun-front-color"
        }.png`}
        alt={isDarkTheme ? "moon-icon" : "sun-icon"}
        width={size}
        height={size}
      />
    </label>
  );
};

export default memo(DarkmodeSwitch);
