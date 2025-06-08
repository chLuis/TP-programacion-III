import { useEffect, useState } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { CiBoxList, CiViewList } from "react-icons/ci";
import { LiaHomeSolid } from "react-icons/lia";
import { GoProject } from "react-icons/go";
import { RiMailLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "@/components/theme-switcher";

export default function DockUse() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(window.location.pathname + window.location.search); // guarda los querys actuales, ej: "?invitation=123"
  }, []);

  return (
    <Dock
      direction="middle"
      iconSize={30}
      iconDistance={10}
      iconMagnification={50}
      className="fixed bottom-4 inset-x-0 h-10 !py-0 border-black/40 bg-white/40 dark:bg-black/40 dark:border-white/40 dark:text-white hover:bg-white hover:border-black duration-200 z-50"
    >
      {DATA.navbar.map((item) => (
        <DockIcon key={item.label} className="!py-0 !my-0" title={item.label}>
          <a
            href={`${search}${item.hash}`}
            aria-label={item.label}
            className={cn(
              "p-1 flex items-center justify-center"
            )}
          >
            {item.icon}
          </a>
        </DockIcon>
      ))}
      <div className="h-6 border"></div>
      <DockIcon key="theme switch" className="!py-0 !my-0 " title="Modo claro/oscuro">
        <ThemeSwitcher />
      </DockIcon>
    </Dock>
  );
}

const DATA = {
  navbar: [
    { hash: "#home", 
      icon: <LiaHomeSolid className="text-lg hover:text-blue-700 duration-200"/>, 
      label: "Inicio" 
    },
    { hash: "#information", 
      icon: <CiViewList className="text-lg hover:text-blue-700 duration-200"/>, 
      label: "Información" 
    },
    { hash: "#skills", 
      icon: <CiBoxList className="text-lg hover:text-blue-700 duration-200"/>, 
      label: "Habilidades" 
    },
    { hash: "#experience", 
      icon: <IoBriefcaseOutline className="text-lg hover:text-blue-700 duration-200"/>, 
      label: "Proyectos Profesionales" 
    },
    { hash: "#projects", 
      icon: <GoProject className="text-lg hover:text-blue-700 duration-200"/>, 
      label: "Proyectos" 
    },
    { hash: "#contact", 
      icon: <RiMailLine className="text-lg hover:text-blue-700 duration-200"/>, 
      label: "Contacto" 
    },
    // { hash: "#jobs", icon: <CiDesktop className="stroke-[0.1]  duration-200"/>, label: "Trabajos" },
    // { hash: "#present", icon: <CiGift className="stroke-[0.1]  duration-200"/>, label: "Present" },
    // { hash: "#assistance", icon: <CiCircleCheck className="stroke-[0.1]  duration-200"/>, label: "Assistance" },
  ],
};

/*

onClick={(e) => {
  e.preventDefault();
  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
}}

*/
