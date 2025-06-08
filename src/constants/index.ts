import { PersonalInformation } from "@/types";

export const PERSONAL_INFO: PersonalInformation =
{
  nombre: "Luis",
  apellido: "Chrestia",
  pais: "Argentina",
  estudios: {
    carrera: "Técnico Universitario en Programación",
    institucion: "UTN - FRT",
    inicio: "Marzo 2024",
    estado: "En curso"
  },
  experiencia: [
    {
      posicion: "Desarrollador Fullstack",
      lugar: "Pigmalion Software",
      descripcion: "Actualmente en proceso de onboarding, integrándome al equipo para desarrollar y mantener soluciones web fullstack. Participación inicial en revisión de proyectos existentes y preparación para asumir tareas tanto en frontend como backend.",
      inicio: "Junio 2025",
      fin: "Actualidad"
    },
    {
      posicion: "Desarrollador Frontend",
      lugar: "Movil Renta",
      descripcion: "Responsable del desarrollo del frontend de la plataforma web de alquiler de vehículos. Implementé la interfaz de usuario desde cero utilizando Next.js, integrando la API de la empresa y asegurando una experiencia fluida, responsive y optimizada.",
      inicio: "Noviembre 2024",
      fin: "Junio 2025"
    }
  ],
  skills: {
    principales: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "MySQL", "PostgreSQL"],
    secundarias: ["Java", "Python", "React Native"],
    otros_conocimientos: ["Git", "Github", "Docker", "Scrum", "KanBan", "AWS", "Tailwind CSS", "Shadcn", "Magic UI", "HeroUI", "Mercado Pago", "Payway"]
  },
  idiomas: {
    espanol: "nativo",
    ingles: "intermedio"
  },
  proyectos_profesionales: [
    {
      title: "Plataforma web para alquiler de vehículos",
      url: "https://www.movilrenta.com.ar/es",
      description: "Optimizé la experiencia de usuario, agregue un sistema de cobro mediante Payway y la gestión de estados, participé en la integración con el backend mediante APIs REST y realicé revisión de código para garantizar coherencia y calidad en el proyecto.",
      technologies: ["HTML", "Next.js", "Tailwind CSS", "Shadcn", "Payway", "MySQL", "Zustand"],
      image_md_light: ["/MovilRenta-light.webm"],
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
      image_md_dark: [],
      image_xs_light: "/lengua-xs.webp",
      image_xs_dark: ""
    },
  ],
  proyectos_varios: [
    "Agenda digital",
    "Gestión de clientes",
    "Drag & Drop",
    "Carrito de compras",
    "Diseño y lógica de programación",
    "Sistema de login con MongoDB y bcrypt"
  ],
  proyectos_personales: [
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
}