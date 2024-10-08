"use client"
import {motion} from "framer-motion";

export default function Template({children}:{children:React.ReactNode}) {
    console.log("TEMPLATE CARREGOU")
  return (
    <motion.div /*Só não coloquei o código pq não to com teams aberto*/>{children}</motion.div>
  )
}