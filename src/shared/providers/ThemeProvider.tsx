import { useDarkMode } from "../hook/useDarkMode";
import { PropsWithChildren, useEffect } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { isDarkMode } = useDarkMode();
  console.log(isDarkMode);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return children;
};

export default ThemeProvider;
