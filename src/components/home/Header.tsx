
import { OrbitingCirclesDemo } from "../circulos";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Header({ alumn }: { alumn: string }) {
  function handleLink(url: string) {
    window.open(url, "_blank");
  }

  return (
    <header className="relative min-h-[500px] grid grid-cols-2 max-w-7xl mx-auto">
      <div className="order-2 md:order-1 col-span-2 md:col-span-1 m-auto">
        <h1 className="text-3xl md:text-7xl font-bold">{alumn}</h1>
        <h3 className="text-lg md:text-2xl">Técnico Universitario en Programación</h3>
        <h3 className="text-lg md:text-2xl">Desarrollador web Fullstack</h3>
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
