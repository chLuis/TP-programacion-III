import { useEffect, useState } from "react";
import { ShimmerButton } from "./magicui/shimmer-button";
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

  return (
    <ShimmerButton
      shimmerColor="red"
      background="rgb(255,255,255)"
      className="p-1 absolute top-2 right-2 z-50"
      onClick={toggleTheme}
    >
      {theme === "light" ? <SunDim className="text-black"/> : <MoonIcon className="dark:text-black stroke-1" />}
    </ShimmerButton>
  );
};

export default ThemeSwitcher;
