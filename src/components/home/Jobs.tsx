import { Safari } from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BiWorld } from "react-icons/bi";

export default function Jobs() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 font-lexend">
      <article className="grid grid-cols-8 gap-4">
        <div className="col-span-8 lg:col-span-3">
        <p className="text-2xl font-bold">Plataforma de reservas de autos</p>
        <a href="https://www.movilrenta.com.ar/es" target="_blank" className="flex items-center gap-1 flex-nowrap hover:text-blue-600"><BiWorld /> ir al sitio web</a>
        <p className="py-2">
          Optimizé la experiencia de usuario y la gestión de estados, participé
          en la integración con el backend mediante APIs REST y realicé revisión
          de código para garantizar coherencia y calidad en el proyecto.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">HTML</span>
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">Next.js</span>
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">Tailwind CSS</span>
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">Shadcn</span>
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">Payway</span>
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">MySQL</span>
          <span className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">Zustand</span>
          
        </div>
        </div>
        <div className="col-span-8 lg:col-span-5 flex flex-col sm:flex-row flex-nowrap justify-between gap-y-4 gap-x-20 w-full">
          <div className="relative flex-1 min-h-80 @max-xs:min-h-72 sm:min-h-96 flex flex-col gap-4 sm:me-0">
            <Safari
              url="https://www.movilrenta.com.ar/es"
              className="dark:hidden sm:absolute w-full top-12 h-auto z-0 hover:z-10 mx-auto rounded-md border"
              imageSrc="/movil-renta-2-md.webp"
            />
            <Safari
              url="https://www.movilrenta.com.ar/es"
              className="dark:hidden sm:absolute top-28 left-16 z-0 hover:z-10 w-full h-auto mx-auto rounded-md border"
              imageSrc="/movil-renta-md.webp"
            />
            <Safari
              url="https://www.movilrenta.com.ar/es"
              className="hidden dark:inline sm:absolute w-full top-12 h-auto z-0 hover:z-10 mx-auto rounded-md border"
              imageSrc="/movil-renta-2-md-dark.webp"
            />
            <Safari
              url="https://www.movilrenta.com.ar/es"
              className="hidden dark:inline sm:absolute top-28 left-16 z-0 hover:z-10 w-full h-auto mx-auto rounded-md border"
              imageSrc="/movil-renta-md-dark.webp"
            />
          </div>
          <Iphone15Pro className="dark:hidden max-h-96 w-fit mx-auto" src="/mr-xs.webp" />
          <Iphone15Pro className="hidden dark:inline max-h-96 w-fit mx-auto" src="/movil-renta-xs-dark.webp" />
        </div>
      </article>
    </section>
  );
}
