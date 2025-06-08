import { PersonalProjectType } from "@/types";

export default function ProjectsPersonal({projects} : {projects: PersonalProjectType[]}) {
  return (
    <section className="relative max-w-7xl mx-auto px-4 gap-4 flex flex-col font-lexend md:px-12">
      <h2 className="text-4xl font-black text-center pt-8">Proyectos Personales</h2>
      {/* <p className="flex items-center justify-center gap-2"><FcWorkflow />Sección en construcción</p> */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 ">
      {projects.map((project, index) => 
        <a href={project.link} target="_blank" key={index} className="col-span-2 rounded-md border hover:border-black dark:hover:border-white overflow-clip sm:h-auto min-h-fit h-fit duration-200">
          {
            project.image_dark 
            ? <>
              <img src={project.image_dark} className="hidden dark:inline h-3/7 w-full object-cover" />
              <img src={project.image} className="dark:hidden h-3/7 w-full object-cover" />
              </>
            : <img src={project.image} className="h-3/7 w-full object-cover" />
          }
          <div className="p-4">
          <p className="font-semibold">{project.title}</p>
          <div className="opacity-60 font-light">{project.description}</div>
          <div className="flex flex-wrap gap-2 pt-3">
            {project.technologies.map((tech, index) =>
              <span key={index} className="select-none py-0 px-2 rounded-sm opacity-80 hover:opacity-100 bg-black text-white dark:bg-neutral-100 dark:text-black font-semibold text-sm duration-200">{tech}</span>
            )}
          </div>
          </div>
        </a>
      )}
      </div>
      </section>
  )
}