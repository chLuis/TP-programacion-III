import { OrbitingCircles } from "./magicui/orbiting-circles";
import { CSSNew, Docker, HeroUI, HTML5, JavaScript, MagicUI, MercadoPago, NestJS, Nextjs, Nodejs, React, Shadcnui, TailwindCSS, TypeScript, Vercel } from "./svg";


export function OrbitingCirclesDemo() {
  return (
    <div className="order-1 md:order-2 col-span-2 md:col-span-1 relative flex md:scale-100 h-[390px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden select-none">
      <img src="/porfolio.webp" alt="imagen realizada por chatgpt con estilo de anime de luis con un fondo naranja" className="absolute m-auto h-32 w-32 rounded-full" />
      <OrbitingCircles iconSize={40} radius={170}>
        <HTML5 className="w-16 h-16"/>
        <JavaScript className="w-16 h-16"/>
        <TypeScript className="w-16 h-16"/>
        <React className="w-16 h-16"/>
        <Nextjs className="w-16 h-16"/>
        <Nodejs className="w-16 h-16"/>
        <NestJS className="w-16 h-16"/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={120} reverse speed={1} >
        <CSSNew className="w-16 h-16 "/>
        <TailwindCSS className="w-16 h-16 "/>
        <HeroUI className="w-16 h-16 "/>
        <MagicUI className="w-16 h-16 "/>
        <Shadcnui className="w-16 h-16 fill-black dark:fill-white stroke-white dark:stroke-black"/>
        <Vercel className="w-16 h-16 fill-dark dark:fill-white"/>
        <Docker className="w-16 h-16"/>
        <MercadoPago className="w-16 h-16 "/>
      </OrbitingCircles>
    </div>
  );
}
