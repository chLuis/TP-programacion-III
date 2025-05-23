
import { CircleLanguages } from "@/components/circle-languages";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FaFilePdf, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { HyperText } from "@/components/magicui/hyper-text";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function Header({ alumn } : { alumn: string }) {

  return (
    <header id="home" className="relative min-h-[500px] grid grid-cols-2 gap-y-2 max-w-7xl mx-auto w-full">
      <div className="order-2 md:order-1 col-span-2 md:col-span-1 m-auto w-full px-4 md:ps-12 z-[9999]">
        <HyperText animateOnHover={false} className="text-4xl text-center md:text-start md:text-6xl font-bold py-0" >{alumn}</HyperText>
        <MorphingText
          className="text-center md:text-start text-black dark:text-white min-w-full max-h-8 md:max-h-16 lg:max-h-10 w-full"
          texts={["Téc. Universitario en Programación", "Desarrollador Web Fullstack"]}
        />
        <div className="flex scale-75 sm:scale-100 justify-center md:justify-start flex-wrap gap-3">
          <a href="https://github.com/chLuis" target="_blank" title="github" aria-label="github" className="flex flex-col gap-0">
            <InteractiveHoverButton className="border-blue-600">
              <FaGithub  />
            </InteractiveHoverButton>
          </a>
          <a href="https://www.linkedin.com/in/luis-chrestia/" aria-label="linkedin" title="linkedin" target="_blank">
            <InteractiveHoverButton className="border-blue-600">
              <FaLinkedin  />
            </InteractiveHoverButton>
          </a>
          <a href="mailto:chluisdev@gmail.com" aria-label="email" title="email" target="_blank">
            <InteractiveHoverButton className="border-blue-600">
              <FaMailBulk  />
            </InteractiveHoverButton>
          </a>
          <a href="https://drive.google.com/file/d/1ShvbbHdJrn2rIbTmC-ljW7UfviXQSfva/view?usp=sharing" aria-label="cv-pdf" title="cv-pdf" target="_blank">
            <InteractiveHoverButton className="border-blue-600">
              <FaFilePdf />
            </InteractiveHoverButton>
          </a>
        </div>
      </div>
      <CircleLanguages />
    </header>
  );
}
