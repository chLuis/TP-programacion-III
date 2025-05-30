import Home from "./components/home";
import { useEffect } from "react";
import { useThemeStore } from "./stores/theme.store";

export default function App() {
  const initTheme = useThemeStore((state) => state.initTheme);
  useEffect(() => {
    initTheme();
  }, [initTheme]);
  return <Home />;
}
