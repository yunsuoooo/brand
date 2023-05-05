import { useEffect, useState } from "react";

type ColorTheme = "dark" | "light";

const DarkmodeSwitch = () => {
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
      document.body.classList.add("dark");
      setIsDark(true);
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const saveTheme = (isDark: boolean) => {
    localStorage.setItem("color-theme", isDark ? "dark" : "light");

    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      saveTheme(!prev);
      return !prev;
    });
  };

  return (
    <label className="p-4 border rounded my-2">
      <input
        className="hidden"
        type="checkbox"
        role="switch"
        checked={isDark}
        onChange={toggleDarkMode}
      />
      {isDark ? "Dark Mode" : "Light Mode"}
    </label>
  );
};

export default DarkmodeSwitch;
