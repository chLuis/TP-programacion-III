import { PersonalInformation } from "@/types";
import { Marquee3D } from "../main/marquee-skills";
import { AboutMe } from "../main/about-me";

export default function Main({data} : {data: PersonalInformation}) {
  return (
    <section id="information" className="max-w-7xl flex flex-col gap-4 px-4 md:px-12 mx-auto py-6">
      <h1 className="text-center text-4xl font-black">Sobre mi</h1>
      <AboutMe data={data}/>
      <Marquee3D data={data.skills} />
    </section>
  )
}
