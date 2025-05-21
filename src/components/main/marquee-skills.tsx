import { Marquee } from "@/components/magicui/marquee";
import { Skills } from "@/types";
import { SkillCard } from "./marquee-skills-card";

export function Marquee3D({ data }: { data: Skills }) {
  return (
    <>
      <h2 id="skills" className="text-4xl pt-8 font-black text-center mb-4">
        Habilidades Técnicas
      </h2>
      <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:500px]">
        <div className="flex flex-row items-center gap-4 -translate-x-10 translate-y-0 -translate-z-28 rotate-x-[20deg] -rotate-y-12 rotate-z-[20deg]">
          <Marquee pauseOnHover vertical className="[--duration:15s]">
            {data.principales.map((review) => (
              <SkillCard key={review} skill={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:15s]" vertical>
            {data.secundarias.map((review) => (
              <SkillCard key={review} skill={review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:15s]" vertical>
            {data.principales.map((review) => (
              <SkillCard key={review} skill={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:15s]" vertical>
            {data.otros_conocimientos.map((review) => (
              <SkillCard key={review} skill={review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </>
  );
}
