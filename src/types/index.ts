export interface PersonalInformation {
  nombre:                   string;
  apellido:                 string;
  pais:                     string;
  estudios:                 Estudios;
  experiencia:              ExperienciaType[];
  skills:                   Skills;
  idiomas:                  Idiomas;
  proyectos_varios:         string[];
  proyectos_profesionales:  ProyectosProfesionalesType[];
  proyectos_personales:     PersonalProjectType[];
}

export interface ExperienciaType {
  posicion:     string;
  lugar:        string;
  descripcion:  string;
  inicio:       string;
  fin:          string;
}

export interface Estudios {
  carrera:     string;
  institucion: string;
  inicio:      string;
  estado:      string;
}

export type ProyectosProfesionalesType = {
  title: string;
  url: string;
  description: string;
  technologies: string[];
  image_md_light: string[];
  image_md_dark: string[];
  image_xs_light: string;
  image_xs_dark: string
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

export type PersonalProjectType = {
  title: string,
  image: string,
  image_dark?: string,
  link: string,
  description: string,
  technologies: string[]
}
