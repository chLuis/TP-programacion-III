import { Safari } from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BiWorld } from "react-icons/bi";

type JOB_TYPE = {
  title: string;
  url: string;
  description: string;
  technologies: string[];
  image_md_light: string[];
  image_md_dark: string[];
  image_xs_light: string;
  image_xs_dark: string
}

const JOBS: JOB_TYPE[] = [
  {
  title: "Plataforma web para alquiler de vehículos",
  url: "https://www.movilrenta.com.ar/es",
  description: "Optimizé la experiencia de usuario, agregue un sistema de cobro mediante Payway y la gestión de estados, participé en la integración con el backend mediante APIs REST y realicé revisión de código para garantizar coherencia y calidad en el proyecto.",
  technologies: ["HTML", "Next.js", "Tailwind CSS", "Shadcn", "Payway", "MySQL", "Zustand"],
  image_md_light: ["/MovilRenta-light.webm"],
  // image_md_light: ["/movil-renta-md.webp", "/movil-renta-2-md.webp"],
  image_md_dark: ["/MovilRenta-dark.webm"],
  image_xs_light: "/mr-xs.webp",
  image_xs_dark: "/movil-renta-xs-dark.webp"
},
  {
  title: "Peluquería y tienda canina",
  url: "https://www.lenguaafuera.com.ar",
  description: "Brindé una solución que incluyó una agenda digital para gestionar turnos, un sistema de gestión de clientes y un eCommerce para la venta de productos y servicios. La plataforma permitió a la peluquería y tienda canina optimizar sus operaciones diarias y expandir su presencia en línea, ofreciendo una experiencia más conveniente para sus clientes.",
  technologies: ["HTML", "Next.js", "Tailwind CSS", "HeroUI", "Node.js", "Express", "MongoDB", "Cloudinary", "AWS S3", "Zustand"],
  image_md_light: ["/LenguaAfuera.webm"],
  // image_md_light: ["/lengua-md.webp", "/lengua-2-md.webp"],
  image_md_dark: [],
  image_xs_light: "/lengua-xs.webp",
  image_xs_dark: ""
},
]

export default function Jobs() {
  return (
    <section id="jobs" className="relative max-w-7xl mx-auto px-4 gap-4 flex flex-col font-lexend">
      <h2 className="text-4xl font-black text-center pt-8">Experiencia</h2>
      {JOBS.map((job, index) => 
      <article key={index} className={`grid grid-cols-8 gap-6 mx-0 md:mx-8 ${index > 0 && 'mt-10'}`}>
        <div className="col-span-8 lg:col-span-3 flex flex-col gap-2 justify-start">
          <p className="text-2xl font-bold">{job.title}</p>
          <a href={job.url} target="_blank" className="flex items-center w-fit gap-1 flex-nowrap hover:text-blue-600 duration-200"><BiWorld /> ir al sitio web</a>
          <p className="py-2">{job.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {job.technologies.map((tech, index) =>
              <span key={index} className="py-0 px-2 rounded-sm bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm">{tech}</span>
            )}
          </div>
        </div>
        <div className="col-span-8 lg:col-span-5 flex flex-col sm:flex-row flex-nowrap justify-between gap-y-4 gap-x-8 w-full">
          <div className="relative flex-1 sm:min-h-96 flex flex-col justify-center gap-4 sm:me-0">
            <Safari
              url={job.url}
              className="dark:hidden w-full h-auto z-10 mx-auto duration-200"
              videoSrc={job.image_md_light[0]}
              // imageSrc={job.image_md_light[0]}
              //videoSrc="/LenguaAfuera.mp4"
              />
            {/* <Safari
              url="https://www.movilrenta.com.ar/es"
              className="dark:hidden lg:absolute top-28 left-16 z-0 hover:z-10 w-full h-auto mx-auto rounded-md border hover:shadow-md hover:shadow-neutral-800 duration-200"
              imageSrc={job.image_md_light[1]}
            /> */}
            <Safari
              url={job.url}
              className="hidden dark:inline lg:absolute w-full h-auto z-10 mx-auto  duration-200"
              videoSrc={job.image_md_dark[0] || job.image_md_light[0]}
              />
            {/* <Safari
              url="https://www.movilrenta.com.ar/es"
              className="hidden dark:inline lg:absolute top-28 left-16 z-0 hover:z-10 w-full h-auto mx-auto rounded-md border hover:shadow-md hover:shadow-neutral-800 duration-200"
              imageSrc={job.image_md_dark[1] || job.image_md_light[1]}
            /> */}
          </div>
          <Iphone15Pro className="hidden lg:inline dark:hidden max-h-96 w-fit mx-auto" src={job.image_xs_light} />
          <Iphone15Pro className="hidden lg:dark:inline max-h-96 w-fit mx-auto" src={job.image_xs_dark || job.image_xs_light} />
        </div>
      </article>
      )}
    </section>
  );
}
