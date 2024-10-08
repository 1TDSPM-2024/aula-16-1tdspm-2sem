import Image from "next/image"
import imgBanner from "@/img/BlackFridayBanner.jpg"

export default function Home() {
  return (
    <div className="content-wrap">
      <Image src={imgBanner} alt="Banner"/>
    </div>
  )
}
