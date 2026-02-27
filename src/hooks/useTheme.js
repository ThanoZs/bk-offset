import { useState, useEffect } from "react";
import { STORAGE_KEYS } from "../utils/constants";

export function useTheme() {
  const [theme, setTheme] = useState(
    () => sessionStorage.getItem(STORAGE_KEYS.THEME) || "dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    sessionStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme, isDark: theme === "dark" };
}
