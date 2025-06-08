import { ExperienciaType } from "@/types";
import { Dot } from "lucide-react";

export default function Experience({exp}: {exp: ExperienciaType[]}) {
  return (
    <section id="experience" className="relative w-full max-w-7xl mx-auto pb-8 px-4 md:px-12 gap-4 flex flex-col font-lexend">
      <h2 className="text-4xl font-black text-center pt-8">Experiencia</h2>
      <ul className="flex flex-col gap-4">
      {exp.map((e, i) => (
        <li key={i} className="flex flex-nowrap gap-4 w-full ">
          <Dot className="mt-1 stroke-[5]"/>
          <div className="w-full">
            <h3 className="text-2xl font-bold">{e.posicion}</h3>
            <h4 className="text-lg font-semibold italic">{e.lugar}</h4>
            <p className="text-sm">{e.inicio} - {e.fin}</p>
            <p className=" opacity-70">{e.descripcion}</p>
          </div>
        </li>
      ))}
      </ul>
      </section>
  )
}