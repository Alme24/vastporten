"use client";
import Header from "../organism/header";
import Footer from "../organism/footer";
import { Title } from "../molecules/Title";
import { Subtitle } from "../molecules/subtitle";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Why(){
    return (
        <div>
            <Header></Header>
            <div className="bg-white h-28 pb-14"></div>
            <div className="relative w-full h-[330px]">
                <Image
                    src="/images/desk.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                />

                <motion.div
                className="items-center justify-center absolute top-1/3 left-1/4"
                initial={{ x: "-100vw" }} 
                animate={{ x: 0 }} 
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                }}
                >
                    <Subtitle subtitle="¿POR QUÉ ELEGIR" />
                    <Title title="VÄSTPORTEN?" />
                </motion.div>
            </div>

            <motion.p
                className="font-['Noto_Sans_Telugu'] text-[#4C4C4C] leading-relaxed text-center text-[16px] font-normal  max-w-2/3 my-50 justify-items-center mx-auto"
                initial={{ opacity: 0, x: "40vw" }} 
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                duration: 1.5,
                ease: "easeOut",
                }}
            >
                Somos una empresa de administración de propiedades que piensa de forma diferente a la mayoría de las empresas de la competencia. Somos modernos, innovadores y estamos orientados a los negocios. Nuestra idea es simple: queremos ayudar a las comunidades de propietarios y a los propietarios a simplificar su vida diaria. Deberían poder llamarnos con cualquier pregunta relacionada con la propiedad, y nosotros deberíamos poder ayudarles a resolver el problema. También le ayudaremos, como comunidad de propietarios o propietario, a resolver cualquier problema persistente que quizás no haya tenido la energía, los conocimientos o el tiempo para abordar. Siempre ofrecemos sugerencias para una solución integral, permanente y económicamente ventajosa. En este proceso, le ayudamos a analizar los proveedores y la gama disponible para que la oferta y las medidas se
                ajusten a su propiedad.
            </motion.p>

            <motion.div
                className="grid grid-cols-[400px_auto] gap-x-10 p-8 mb-40 items-center justify-items-center bg-[#F4F4F4] rounded-[8px] w-4/5 mx-auto shadow-lg"
                initial={{ opacity: 0, y: "40vh" }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0 }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                }}
            >
                <Image
                    src="/images/image25.webp"
                    alt=""
                    width={400}
                    height={424}
                />
                <Subtitle description="También somos expertos en eficiencia energética y podemos ayudarle a ahorrar mucho dinero implementando medidas de eficiencia energética en su propiedad. Cada propuesta que desarrollamos es única para su propiedad y se adapta a cómo su propiedad tiene la mejor oportunidad de ahorrar energía. Finalmente, como mencioné, somos una empresa innovadora de administración de propiedades que ofrece a asociaciones de vivienda o propietarios una gestión simple y profesional. Queremos generar rentabilidad financiera y asegurarnos de optimizar y reducir los costos operativos en todas las propiedades con las que trabajamos. Nuestro principal objetivo es crear propiedades que funcionen bien y obtengan la máxima rentabilidad. La única manera de satisfacer a nuestros clientes es escucharlos y hacer lo que dicen. Por lo tanto, seremos receptivos y muy flexibles en cuanto a los servicios que el cliente solicita. Simplemente adaptamos el acuerdo a sus necesidades específicas."></Subtitle>
            </motion.div>
            <Footer></Footer>
        </div>
    );
}