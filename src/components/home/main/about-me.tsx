import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { PersonalInformation } from "@/types";

export function AboutMe({ data }: { data: PersonalInformation }) {
  const delayStep = 400;
  let currentDelay = 0;

  const elements: React.ReactNode[] = [];

  elements.push(
    <TypingAnimation key="nombre" delay={currentDelay} duration={10}>
      {`Iniciando proyecto: ${data.nombre} ${data.apellido} ✔`}
    </TypingAnimation>
  );
  currentDelay += delayStep;

  elements.push(
    <AnimatedSpan key="pais" delay={currentDelay} className="text-green-600 dark:text-green-400">
      <span>{`✔ Nacionalidad ${data.pais}.`}</span>
    </AnimatedSpan>
  );
  currentDelay += delayStep;

  elements.push(
    <AnimatedSpan key="estudios" delay={currentDelay} className="text-green-600 dark:text-green-400">
      <span className="text-wrap">{`✔ ${data.estudios.carrera} ${data.estudios.institucion}. Desde ${data.estudios.inicio} estado ${data.estudios.estado}.`}</span>
    </AnimatedSpan>
  );
  currentDelay += delayStep;

  elements.push(
    <AnimatedSpan key="estudios2" delay={currentDelay} className="text-green-600 dark:text-green-400">
      <span className="text-wrap">{`✔ Desarrollador Web Fullstack - Rolling Code School. Octubre 2022 - Agosto 2023.`}</span>
    </AnimatedSpan>
  );
  currentDelay += delayStep;

  // data.experiencia.map((exp, index) => {
  //   elements.push(
  //     <AnimatedSpan
  //       key={`exp-${index}`}
  //       delay={currentDelay}
  //       className="text-green-600 dark:text-green-400"
  //     >
  //       <span className="text-wrap">{`✔ ${exp.rol} ${exp.desde} hasta ${exp.hasta} en ${exp.proyecto} con ${exp.tecnologias.join(", ")}.`}</span>
  //     </AnimatedSpan>
  //   );
  //   currentDelay += delayStep;
  // });

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="skill-principales"
        className="text-green-600 dark:text-green-400"
      >
        <span className="text-wrap">{`✔ Habilidades principales ${data.skills.principales.join(", ")}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="skill-secundarias"
        className="text-green-600 dark:text-green-400"
      >
        <span className="text-wrap">{`✔ Habilidades secundarias ${data.skills.secundarias.join(", ")}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="skill-otros-conocimientos"
        className="text-green-600 dark:text-green-400"
      >
        <span className="text-wrap">{`✔ Otros conocimientos ${data.skills.otros_conocimientos.join(", ")}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="espanol"
        className="text-green-600 dark:text-green-400"
      >
        <span className="text-wrap">{`✔ Español ${data.idiomas.espanol}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
      <AnimatedSpan
        delay={currentDelay}
        key="ingles"
        className="text-green-600 dark:text-green-400"
      >
        <span className="text-wrap">{`✔ Inglés ${data.idiomas.ingles}.`}</span>
      </AnimatedSpan>
    );

  currentDelay += delayStep

  elements.push(
    <AnimatedSpan key="proyectos" delay={currentDelay} className="text-green-600 dark:text-green-400">
      <span className="text-wrap">{`✔ Proyectos personales: ${data.proyectos_varios.join(", ")}.`}</span>
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
    <TypingAnimation key="success" delay={currentDelay} duration={10} className="text-muted-foreground">
      Success! Project initialization completed.
    </TypingAnimation>
  );
  currentDelay += delayStep;

  elements.push(
    <TypingAnimation key="add-components" delay={currentDelay} duration={40} className="text-muted-foreground">
      You can continue viewing. Thanks.
    </TypingAnimation>
  );

  return <Terminal className="w-full max-w-full border-2 min-h-[470px] bg-slate-50 dark:bg-black h-fit max-h-fit">{elements}</Terminal>;
}
