import { MoonIcon, SunDim } from "lucide-react";
import { useThemeStore } from "@/stores/theme.store";

const ThemeSwitcher = () => {
  const theme = useThemeStore((state) => state.getTheme())
  const toggleTheme = useThemeStore((state) => state.toogleTheme)

  return theme === "light" ? (
    <SunDim
      onClick={toggleTheme}
      className="text-black stroke-[1.8] hover:stroke-[2.5] duration-200"
    />
  ) : (
    <MoonIcon
      onClick={toggleTheme}
      className="dark:text-white stroke-1 hover:stroke-2 duration-200"
    />
  );
};

export default ThemeSwitcher;
