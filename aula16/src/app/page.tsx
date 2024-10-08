import Image from "next/image"
import imgCapa from "../../public/img/modelo-de-capa.jpg"

export default function Home() {
  return (
    <div className="content-wrap">
      <Image src={imgCapa} alt="Fones de ouvido"/>
    </div>
  )
}
