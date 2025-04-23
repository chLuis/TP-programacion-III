import ThemeSwitcher from "../theme-switcher";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <>
    <ThemeSwitcher />
    <Header alumn="Chrestia Luis" />
    <Main data={info}/>
    <Footer />
    
    </>
  )
}
const info = 
{
  nombre: "Luis",
  pais: "Argentina",
  zona_horaria: "UTC-3",
  estudios: {
    carrera: "Técnico Universitario en Programación",
    institucion: "Universidad Tecnológica Nacional - FRT",
    inicio: "Marzo 2024",
    estado: "En curso"
  },
  experiencia: [
    {
      rol: "Desarrollador Fullstack Freelance",
      desde: "Julio 2024",
      hasta: "Agosto 2024",
      proyecto: "Sistema de administración de alumnos",
      tecnologias: ["MongoDB", "Next.js", "Zustand", "Tailwind", "Shadcn"]
    },
    {
      rol: "Desarrollador Fullstack Freelance",
      desde: "Diciembre 2023",
      hasta: "Marzo 2024",
      proyectos: [
        "Agenda digital de turnos",
        "Sistema de gestión de clientes",
        "Plataforma de ecommerce"
      ],
      tecnologias: ["React", "Node.js", "MongoDB", "Zustand"]
    }
  ],
  skills: {
    principales: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB"],
    secundarias: ["Java", "Python", "SQL", "MySQL", "PostgreSQL", "React Native"],
    otros_conocimientos: ["Git", "Github", "Scrum", "KanBan", "AWS", "Tailwind CSS", "Shadcn", "Material UI"]
  },
  idiomas: {
    espanol: "nativo",
    ingles: "intermedio"
  },
  proyectos_personales: [
    "Agenda digital",
    "Gestión de clientes",
    "Drag & Drop",
    "Carrito de compras",
    "Diseño y lógica de programación",
    "Sistema de login con MongoDB y bcrypt"
  ]
}

export interface PersonalInformation {
  nombre:               string;
  pais:                 string;
  zona_horaria:         string;
  estudios:             Estudios;
  experiencia:          Experiencia[];
  skills:               Skills;
  idiomas:              Idiomas;
  proyectos_personales: string[];
}

export interface Estudios {
  carrera:     string;
  institucion: string;
  inicio:      string;
  estado:      string;
}

export interface Experiencia {
  rol:         string;
  desde:       string;
  hasta:       string;
  proyecto?:   string;
  tecnologias: string[];
  proyectos?:  string[];
}

export interface Idiomas {
  espanol: string;
  ingles:  string;
}

export interface Skills {
  principales:         string[];
  secundarias:         string[];
  otros_conocimientos: string[];
}