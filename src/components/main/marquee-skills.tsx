import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Skills } from "@/types";

const ReviewCard = ({ skill }: { skill: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Aqui pondria el svg o imagen*/}
        <div className="text-center text-nowrap w-full">{skill}</div>
      </div>
    </figure>
  );
};

export function Marquee3D({ data }: { data: Skills }) {
  return (
    <>
      <h2 className="text-4xl font-black text-center mb-4">
        Habilidades Técnicas
      </h2>
      <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:500px]">
        <div className="flex flex-row items-center gap-4 -translate-x-10 translate-y-0 -translate-z-28 rotate-x-[20deg] -rotate-y-12 rotate-z-[20deg]">
          <Marquee pauseOnHover vertical className="[--duration:15s]">
            {data.principales.map((review) => (
              <ReviewCard key={review} skill={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:15s]" vertical>
            {data.secundarias.map((review) => (
              <ReviewCard key={review} skill={review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:15s]" vertical>
            {data.principales.map((review) => (
              <ReviewCard key={review} skill={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:15s]" vertical>
            {data.otros_conocimientos.map((review) => (
              <ReviewCard key={review} skill={review} />
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
