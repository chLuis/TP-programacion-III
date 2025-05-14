import { useEffect, useState } from "react";
import { MoonIcon, SunDim } from "lucide-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Verifica si hay una preferencia guardada
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return theme === "light" ? (
    <SunDim
      onClick={toggleTheme}
      className="text-black stroke-1 hover:stroke-2 duration-200"
    />
  ) : (
    <MoonIcon
      onClick={toggleTheme}
      className="dark:text-white stroke-1 hover:stroke-2 duration-200"
    />
  );
};

export default ThemeSwitcher;
