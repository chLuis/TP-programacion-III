import { Safari } from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BiWorld } from "react-icons/bi";
import { ProyectosProfesionalesType } from "@/types";

export default function ProjectsProffessional({projects}:{projects: ProyectosProfesionalesType[]}) {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 gap-4 flex flex-col font-lexend">
      <h2 className="text-4xl font-black text-center pt-8">Proyectos Profesionales</h2>
      {projects.map((job, index) => 
      <article key={index} className={`grid grid-cols-8 gap-6 mx-0 md:mx-8 ${index > 0 && 'mt-10'}`}>
        <div className="col-span-8 lg:col-span-3 flex flex-col gap-2 justify-start">
          <p className="text-2xl font-bold">- {job.title}</p>
          <a href={job.url} target="_blank" className="flex items-center w-fit gap-1 flex-nowrap hover:text-blue-600 duration-200"><BiWorld /> ir al sitio web</a>
          <p className="py-2">{job.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {job.technologies.map((tech, index) =>
              <span key={index} className="select-none py-0 px-2 rounded-sm opacity-80 hover:opacity-100 bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm duration-200">{tech}</span>
            )}
          </div>
        </div>
        <div className="col-span-8 lg:col-span-5 flex flex-col sm:flex-row flex-nowrap justify-between gap-y-4 gap-x-8 w-full">
          <div className="relative flex-1 sm:min-h-96 flex flex-col justify-center gap-4 sm:me-0">
            <Safari
              url={job.url}
              className="dark:hidden w-full h-auto z-10 mx-auto duration-200"
              videoSrc={job.image_md_light[0]}
              />

            <Safari
              url={job.url}
              className="hidden dark:inline lg:absolute w-full h-auto z-10 mx-auto  duration-200"
              videoSrc={job.image_md_dark[0] || job.image_md_light[0]}
              />
          </div>
          <Iphone15Pro className="hidden lg:inline dark:hidden max-h-96 w-fit mx-auto" src={job.image_xs_light} />
          <Iphone15Pro className="hidden lg:dark:inline max-h-96 w-fit mx-auto" src={job.image_xs_dark || job.image_xs_light} />
        </div>
      </article>
      )}
    </section>
  );
}
