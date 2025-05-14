import { Safari } from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export default function Jobs() {
  return (
    <section className="relative border">
      <article className="flex flex-col">

      <p>Plataforma de reservas de autos</p>
      <p>Optimizé la experiencia de usuario y la gestión de estados, participé en la integración con el backend mediante APIs REST y realicé revisión de código para garantizar coherencia y calidad en el proyecto.</p>
      <div className="grid grid-cols-2">
        
      <Safari
        url="https://www.movilrenta.com.ar/es"
        className="max-h-96"
        width={1200}
        imageSrc="/movil-renta.webp"
        />
        <Iphone15Pro
        className="max-h-96"
        src="/mr-xs.png"
        />
        </div>
        </article>
    </section>
  );
}
