
import { OrbitingCirclesDemo } from "../circulos";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { HyperText } from "../magicui/hyper-text";
import { WordRotate } from "../magicui/word-rotate";

export default function Header({ alumn }: { alumn: string }) {
  function handleLink(url: string) {
    window.open(url, "_blank");
  }

  return (
    <header className="relative min-h-[500px] grid grid-cols-2 gap-y-2 max-w-7xl mx-auto">
      <div className="order-2 md:order-1 col-span-2 md:col-span-1 m-auto w-full px-4 md:px-2">
        <HyperText animateOnHover={false} className="text-3xl md:text-7xl font-extrabold py-0" >{alumn}</HyperText>
        <WordRotate
          className="text-lg md:text-2xl text-black dark:text-white min-w-full w-full"
          words={["Técnico Universitario en Programación", "Desarrollador web Fullstack"]}
        />
        <h3 className="text-lg md:text-2xl"></h3>
        <h3 className="text-lg md:text-2xl"></h3>
      <div className="pt-3 space-x-4">
        <InteractiveHoverButton className="border-blue-600" onClick={() => handleLink("https://github.com/chLuis")}><FaGithub  /></InteractiveHoverButton>
        <InteractiveHoverButton className="border-blue-600" onClick={() => handleLink("https://www.linkedin.com/in/luis-chrestia/")}><FaLinkedin  /></InteractiveHoverButton>
        <InteractiveHoverButton className="border-blue-600" onClick={() => handleLink("mailto:chluisdev@gmail.com")}><FaMailBulk  /></InteractiveHoverButton>
      </div>

      </div>
      <OrbitingCirclesDemo />
    </header>
  );
}
