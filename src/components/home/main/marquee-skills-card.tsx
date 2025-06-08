import { cn } from "@/lib/utils";

export const SkillCard = ({ skill }: { skill: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4 select-none ",
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