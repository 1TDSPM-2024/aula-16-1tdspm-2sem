import Image from "next/image";
import imgCapa from "@/img/blackfriday.jpg";

export default function Home() {
  return (
    <div className="content-wrap">
      {/* <Image src="/img/blackfriday.jpg" alt="Fones de ouvido"/> */}
      <Image src={imgCapa} alt="Fones de ouvido"/>
    </div>
  )
}