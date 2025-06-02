import { PERSONAL_INFO } from "@/constants";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import DockUse from "./Dock-use";
import Experience from "./Experience";
import Projects from "./Projects";
import ContactForm from "./Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header alumn={PERSONAL_INFO.apellido + " " + PERSONAL_INFO.nombre} />
      <Main data={PERSONAL_INFO} />
      <Experience />
      <Projects />
      <ContactForm />
      <DockUse />
      <Footer alumn="Chrestia Luis"/>
    </div>
  );
}
