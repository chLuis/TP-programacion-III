
import { OrbitingCirclesDemo } from "../circulos";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Header({ alumn }: { alumn: string }) {
  function handleLink(url: string) {
    window.open(url, "_blank");
  }

  return (
    <header className="relative h-[500px] grid grid-cols-2 max-w-7xl mx-auto">
      <div className="col-span-1 m-auto">
        <h1 className="text-7xl font-bold">{alumn}</h1>
        <h2 className="text-2xl">Técnico Universitario en Programación</h2>
        <h2 className="text-2xl">Desarrollador web Fullstack</h2>
      <div className="pt-2 space-x-4">
        <InteractiveHoverButton onClick={() => handleLink("https://github.com/chLuis")}><FaGithub  /></InteractiveHoverButton>
        <InteractiveHoverButton onClick={() => handleLink("https://www.linkedin.com/in/luis-chrestia/")}><FaLinkedin  /></InteractiveHoverButton>
        <InteractiveHoverButton onClick={() => handleLink("mailto:chluisdev@gmail.com")}><FaMailBulk  /></InteractiveHoverButton>
      </div>

      </div>
      <OrbitingCirclesDemo />
    </header>
  );
}
