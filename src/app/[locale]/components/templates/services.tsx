"use client";
import Header from "../organism/header";
import Footer from "../organism/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Title } from "../molecules/Title";
import { Subtitle } from "../molecules/subtitle";

export default function OurServices (){
    return(
        <div>
          <Header></Header>
          <div className="relative h-[100vh] w-full">
            <Image
                src="/images/silla.webp"
                alt=""
                fill
                className="object-cover mask-bottom-gradient z-0"
            >
            </Image>
            <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{opacity:0, y:"20vh"}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:false, amount:0}}
                transition={{
                    duration:1.5,
                    ease: "easeOut"
                }}
            >
              <Title title="NUESTROS SERVICIOS"/>
            </motion.div>
          </div>
            
          <motion.p
              className="font-['Noto_Sans_Telugu'] text-[#4C4C4C] leading-relaxed text-center text-[16px] font-normal py-18 max-w-2/3 my-4 justify-items-center mx-auto"
              initial={{opacity:0, y:"20vh"}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:false, amount:0}}
              transition={{
                  duration:1.5,
                  ease: "easeOut"
              }}
          >
              Le ofrecemos soluciones integrales como propietario, donde nos responsabilizamos totalmente de sus propiedades. Esto
              significa que podemos encargarnos de todo, o de algunas partes, según sus necesidades.
          </motion.p>

          <motion.div
              className="justify-items-center py-8 px-10 max-w-1/2 my-15 mx-auto bg-[#F4F4F4] rounded-[8px] shadow-lg"
              initial={{opacity:0, x: "-50vw" }} 
              whileInView={{opacity:1, x: 0 }} 
              viewport={{once:false, amount:0.1}}
              transition={{
                  duration: 2,
                  ease: "easeOut",
              }}
          >
              <Subtitle subtitle="Algunos de los servicios que ofrecemos" />
              <ul className="font-['Noto_Sans_Telugu'] text-[14px] text-[#4C4C4C] font-normal text-left leading-relaxed list-disc pl-6">
                  <li>Supervisión general, mantenimiento y patrullaje</li>
                  <li>Mantenimiento de propiedades, interiores y exteriores</li>
                  <li>Limpieza</li>
                  <li>Gestión técnica</li>
                  <li>Gestión financiera</li>
                  <li>Informe de errores</li>
                  <li>Reparaciones y mantenimiento</li>
                  <li>Alquiler de apartamentos a clientes</li>
                  <li>Control de nieve y hielo</li>
                  <li>Recogida de grava/grava</li>
                  <li>Limpieza de ventanas</li>
                  <li>Inspecciones</li>
                  <li>Monitorizar los acuerdos con proveedores y servicios del cliente</li>
                  <li>Servicio de guardia</li>
              </ul>
          </motion.div>

          
          <motion.div
              className="justify-items-center w-3/4 mx-auto my-15 py-15"
              initial={{ opacity:0, x: "-50vw" }} 
              whileInView={{ opacity:1,x: 0 }} 
              viewport={{once:false, amount:0.1}}
              transition={{
                  duration: 2,
                  ease: "easeOut",
              }}
          >
              <Title title="Otros servicios"/>
              <div className="grid grid-cols-3 gap-x-2 p-2 justify-items-center">
                  <Image
                      src={"/images/hombres.webp"}
                      alt=""
                      width={333}
                      height={344}
                      className="h-full"
                  />
                  <div className="col-span-2">
                    <Subtitle description={`
                      Como propietario, también puede optar por que nos encarguemos únicamente de ciertas partes de la gestión técnica. Adaptamos la gestión a las necesidades de su empresa o propiedad. Independientemente de la solución que elija, trabajamos con control para alcanzar los objetivos que usted y nosotros, como propietario, hemos establecido conjuntamente en cuanto a valorización, beneficios para el usuario y rentabilidad.
                      Västporten es una empresa fundada por dos jóvenes cansados de lo anticuada y obsoleta que es la administración de propiedades actual. Por ello, queremos modernizar, optimizar y facilitar la vida a nuestros propietarios en cualquier situación. Johan y Daniel han desarrollado una amplia red de contactos a lo largo de los años y cuentan con una amplia experiencia en administración y gestión de propiedades, lo que nos permite trabajar de forma eficiente y económica. Además, contamos con un enfoque holístico que resulta sumamente valioso en el trabajo con propiedades.
                    `} />
                  </div>
              </div>
          </motion.div>
          <Footer />
        </div>
    );
}