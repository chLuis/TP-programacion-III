import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { CiBoxList, CiDesktop, CiViewList } from "react-icons/ci";
import { LiaHomeSolid } from "react-icons/lia";
import ThemeSwitcher from "../theme-switcher";
import { GoProject } from "react-icons/go";

export default function DockUse() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(window.location.pathname + window.location.search); // guarda los querys actuales, ej: "?invitation=123"
  }, []);

  return (
    <Dock
      direction="middle"
      iconSize={35}
      iconDistance={10}
      iconMagnification={70}
      className="fixed bottom-4 inset-x-0 h-10 !py-0 border-black/40 bg-white/40 dark:bg-black/40 dark:border-white/40 dark:text-white hover:bg-white hover:border-black duration-200 z-50"
    >
      {DATA.navbar.map((item) => (
        <DockIcon key={item.label} className="!py-0 !my-0 " title={item.label}>
          <a
            href={`${search}${item.hash}`}
            aria-label={item.label}
            className={cn(
              "text-2xl rounded-full px-0 flex items-center justify-center"
            )}
          >
            {item.icon}
          </a>
        </DockIcon>
      ))}
      <div className="h-6 border"></div>
       <DockIcon key="theme switch" className="!py-0 !my-0 " title="theme switch">
        
      <ThemeSwitcher />
       </DockIcon>
    </Dock>
  );
}

const DATA = {
  navbar: [
    { hash: "#home", icon: <LiaHomeSolid className="stroke-[0.1] hover:stroke-1 duration-200"/>, label: "Home" },
    { hash: "#information", icon: <CiViewList className="stroke-[0.1] hover:stroke-1 duration-200"/>, label: "Information" },
    { hash: "#skills", icon: <CiBoxList className="stroke-[0.1] hover:stroke-1 duration-200"/>, label: "Habilidades" },
    { hash: "#jobs", icon: <CiDesktop className="stroke-[0.1] hover:stroke-1 duration-200"/>, label: "Trabajos" },
    { hash: "#projects", icon: <GoProject className="stroke-[0.1] hover:stroke-1 duration-200"/>, label: "Proyectos" },
    // { hash: "#jobs", icon: <CiDesktop className="stroke-[0.1] hover:stroke-1  duration-200"/>, label: "Trabajos" },
    // { hash: "#present", icon: <CiGift className="stroke-[0.1] hover:stroke-1  duration-200"/>, label: "Present" },
    // { hash: "#assistance", icon: <CiCircleCheck className="stroke-[0.1] hover:stroke-1  duration-200"/>, label: "Assistance" },
  ],
};

/*

onClick={(e) => {
  e.preventDefault();
  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
}}

*/
