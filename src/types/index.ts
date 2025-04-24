export interface PersonalInformation {
  nombre:               string;
  apellido:             string;
  pais:                 string;
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
  proyecto:    string[];
  tecnologias: string[];
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


