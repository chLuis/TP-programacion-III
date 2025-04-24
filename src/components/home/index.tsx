import { PERSONAL_INFO } from "@/constants";
import ThemeSwitcher from "../theme-switcher";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <Header alumn="Chrestia Luis" />
      <Main data={PERSONAL_INFO} />
      <Footer alumn="Chrestia Luis"/>
    </>
  );
}
