import { PERSONAL_INFO } from "@/constants";
import ThemeSwitcher from "../theme-switcher";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import DockUse from "./Dock-use";
// import Jobs from "./Jobs";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <Header alumn="Chrestia Luis" />
      <Main data={PERSONAL_INFO} />
      {/* <Jobs /> */}
      <DockUse />
      <Footer alumn="Chrestia Luis"/>
    </>
  );
}
