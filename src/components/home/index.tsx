import { PERSONAL_INFO } from "@/constants";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import DockUse from "./Dock-use";
import ContactForm from "./Contact";
import ProjectsProffessional from "./ProjectsProffessional";
import Experience from "./Experience";
import ProjectsPersonal from "./ProjectsPersonal";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header alumn={PERSONAL_INFO.apellido + " " + PERSONAL_INFO.nombre} />
      <Main data={PERSONAL_INFO} />
      <Experience exp={PERSONAL_INFO.experiencia}/>
      <ProjectsProffessional projects={PERSONAL_INFO.proyectos_profesionales}/>
      <ProjectsPersonal projects={PERSONAL_INFO.proyectos_personales}/>
      <ContactForm />
      <DockUse />
      <Footer alumn={PERSONAL_INFO.apellido + " " + PERSONAL_INFO.nombre}/>
    </div>
  );
}
