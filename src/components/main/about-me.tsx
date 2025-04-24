import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { PersonalInformation } from "@/types";

export function AboutMe({ data }: { data: PersonalInformation }) {
  const delayStep = 500;
  let currentDelay = 0;

  const elements: React.ReactNode[] = [];

  elements.push(
    <TypingAnimation key="nombre" delay={currentDelay}>
      {`Iniciando proyecto: ${data.nombre} ${data.apellido} ✔`}
    </TypingAnimation>
  );
  currentDelay += delayStep;

  elements.push(
    <AnimatedSpan key="pais" delay={currentDelay} className="text-green-500">
      <span>{`✔ Nacionalidad ${data.pais}.`}</span>
    </AnimatedSpan>
  );
  currentDelay += delayStep;

  elements.push(
    <AnimatedSpan key="estudios" delay={currentDelay} className="text-green-500">
      <span className="text-wrap">{`✔ ${data.estudios.carrera} ${data.estudios.institucion}. Desde ${data.estudios.inicio} estado ${data.estudios.estado}`}</span>
    </AnimatedSpan>
  );
  currentDelay += delayStep;

  data.experiencia.map((exp, index) => {
    elements.push(
      <AnimatedSpan
        key={`exp-${index}`}
        delay={currentDelay}
        className="text-green-500"
      >
        <span className="text-wrap">{`✔ ${exp.rol} ${exp.desde} hasta ${exp.hasta} en ${exp.proyecto} con ${exp.tecnologias.join(", ")}.`}</span>
      </AnimatedSpan>
    );
    currentDelay += delayStep;
  });

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="skill-principales"
        className="text-green-500"
      >
        <span className="text-wrap">{`✔ Habilidades principales ${data.skills.principales.join(", ")}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="skill-secundarias"
        className="text-green-500"
      >
        <span className="text-wrap">{`✔ Habilidades secundarias ${data.skills.secundarias.join(", ")}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="skill-otros-conocimientos"
        className="text-green-500"
      >
        <span className="text-wrap">{`✔ Otros conocimientos ${data.skills.otros_conocimientos.join(", ")}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="espanol"
        className="text-green-500"
      >
        <span className="text-wrap">{`✔ Español ${data.idiomas.espanol}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="ingles"
        className="text-green-500"
      >
        <span className="text-wrap">{`✔ Inglès ${data.idiomas.ingles}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
    <AnimatedSpan key="proyectos" delay={currentDelay} className="text-green-500">
      <span className="text-wrap">{`✔ Proyectos personales: ${data.proyectos_personales.join(", ")}.`}</span>
    </AnimatedSpan>
  );


  elements.push(
    <AnimatedSpan key="updated-file" delay={currentDelay} className="text-blue-500">
      <span>ℹ Updated 1 file:</span>
      <span className="pl-2">- CV/chrestia-luis.ts</span>
    </AnimatedSpan>
  );
  currentDelay += delayStep;

  elements.push(
    <TypingAnimation key="success" delay={currentDelay} className="text-muted-foreground">
      Success! Project initialization completed.
    </TypingAnimation>
  );
  currentDelay += delayStep;

  elements.push(
    <TypingAnimation key="add-components" delay={currentDelay} className="text-muted-foreground">
      You may now add components.
    </TypingAnimation>
  );

  return <Terminal className="w-full max-w-full border-2 h-fit max-h-fit">{elements}</Terminal>;
}
