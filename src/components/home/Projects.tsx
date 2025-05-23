import { FcWorkflow } from "react-icons/fc";

type ProjectType = {
  title: string,
  image: string,
  image_dark?: string,
  link: string,
  description: string,
  technologies: string[]
}

const PROJECTS: ProjectType[] = [
  {
    title: "Agenda web",
    image: "/agenda-light.webp",
    image_dark: "/agenda-dark.webp",
    link: "https://challenge-schedule.vercel.app/",
    description: "Desarrollé una página con Next.js y TypeScript para programar citas de media hora entre las 10:00 y las 18:00. La página obtiene los datos de una API y utiliza Zustand para la gestión de estados.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn", "TypeScript"]
  },
  {
    title: "Whatsapp web",
    image: "https://proyects-chluis.netlify.app/images/wspFake.webp",
    link: "https://proyects-chluis.netlify.app/wspFake",
    description: "Proyecto ganador en una competencia que pedía imitar la app web de whatsapp utilizando unicamente HTML y CSS.",
    technologies: ["HTML", "CSS"]
  },
  {
    title: "Proyectos varios",
    image: "https://chluis-portfolio.netlify.app/images/multiproject.webp",
    link: "https://proyects-chluis.netlify.app/",
    description: "Página personal donde realizo: transcripción de audio a texto, API clima, creacion de post, lista de tareas, pedidos a una API y Drag and Drop (arrastrar y soltar) de objetos.",
    technologies: ["HTML", "CSS", "React", "Vite", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn", "Zustand"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 gap-4 flex flex-col font-lexend px-4 md:px-12">
      <h2 className="text-4xl font-black text-center pt-8">Proyectos Personales</h2>
      <p className="flex items-center justify-center gap-2"><FcWorkflow />Sección en construcción</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 ">
      {PROJECTS.map((project, index) => 
        <a href={project.link} target="_blank" key={index} className="col-span-2 rounded-md border overflow-clip sm:h-auto min-h-fit h-fit sm:h-full">
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