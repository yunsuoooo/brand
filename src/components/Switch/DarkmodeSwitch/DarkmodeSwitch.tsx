import { memo, useEffect, useState } from "react";
import Image from "next/image";

type ColorTheme = "dark" | "light";

interface DarkmodeSwitchProps {
  size: number;
}

const DarkmodeSwitch = ({ size }: DarkmodeSwitchProps) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (!window) return;

    const osTheme: ColorTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
    const userTheme: ColorTheme = localStorage.getItem(
      "color-theme"
    ) as ColorTheme;

    const theme = userTheme || osTheme;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const saveTheme = (isDark: boolean) => {
    localStorage.setItem("color-theme", isDark ? "dark" : "light");

    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      saveTheme(!prev);
      return !prev;
    });
  };

  return (
    <label className="flex flex-col justify-center text-primary-dark dark:text-white">
      <input
        className="hidden"
        type="checkbox"
        role="switch"
        checked={isDark}
        onChange={toggleDarkMode}
      />
      <Image
        src={`/images/${
          isDark ? "star-front-gradient" : "sun-front-color"
        }.png`}
        alt={isDark ? "moon-icon" : "sun-icon"}
        width={size}
        height={size}
      />
    </label>
  );
};

export default memo(DarkmodeSwitch);
