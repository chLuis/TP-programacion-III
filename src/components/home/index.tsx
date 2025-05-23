import { PERSONAL_INFO } from "@/constants";
// import ThemeSwitcher from "../theme-switcher";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import DockUse from "./Dock-use";
import Jobs from "./Jobs";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* <ThemeSwitcher /> */}
      <Header alumn="Chrestia Luis" />
      <Main data={PERSONAL_INFO} />
      <Jobs />
      <Projects />
      <DockUse />
      <Footer alumn="Chrestia Luis"/>
    </div>
  );
}
