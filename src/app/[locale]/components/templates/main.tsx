"use client";
import Header from "@/app/[locale]/components/organism/header";
import Footer from "@/app/[locale]/components/organism/footer";
import CanvaAnimated from "@/app/[locale]/components/molecules/canvaAnimated"
import { motion } from "framer-motion";
import { SubtitleHome } from "@/app/[locale]/components/molecules/subtitle2";
import { Card2 } from "@/app/[locale]/components/organism/card2";
import { Title } from "@/app/[locale]/components/molecules/Title";
import Button from "@/app/[locale]/components/molecules/boton";

export default function Main(){
    return (
        <div>
            <Header />
            <CanvaAnimated />
            <motion.div
            className="pt-40 justify-items-center"
            initial={{opacity:0, x:"10vw"}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true, amount:0.8}}
            transition={{
                duration:1.5,
                ease:"easeOut"
            }}
            >
            <SubtitleHome
                subtitle="Una empresa de gestión local que se preocupa"
                description="Västporten realiza una gestión inmobiliaria integral que incluye la gestión técnica, la gestión financiera y el mantenimiento.Nuestra visión es ofrecer una gestión inmobiliaria de primera clase, adaptada a las necesidades y expectativas de nuestros clientes. Nos consideramos una empresa local, fiable, altamente competente y moderna. Cada cliente se sentirá único gracias a nuestro trato personalizado."
            />
            </motion.div>
            <motion.img
            src={"/images/1.webp"}
            alt=""
            className="w-full h-auto"
            style={{ objectFit: "cover" }}
            initial={{opacity:0, y:"10vh"}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.5}}
            transition={{
                duration:1.2,
                ease:"easeOut"
            }}
            />

            <motion.div
            className="justify-items-center w-3/5 mx-auto"
            initial={{opacity:0, y:"10vh"}}
            whileInView={{opacity:1, y:0.5}}
            viewport={{once:true, amount:0}}
            transition={{
                duration:1,
                ease:"easeOut"
            }}
            >
            <SubtitleHome
                subtitle="Nuestros servicios"
                description="Ofrecemos soluciones integrales para usted, como asociación de propietarios o propietario, donde asumimos la responsabilidad total de sus propiedades. Esto significa que podemos encargarnos de todo, o de algunas partes, según sus necesidades como propietario."
            />
            </motion.div>

            <div className="grid grid-cols-3 pt-19 pb-14 justify-items-center w-3/4 mx-auto">
            <motion.div
                initial={{opacity:0, x:"-10vw"}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once:true, amount:0.5}}
                transition={{
                duration:1,
                ease:"easeOut"
                }}
            >
                <Card2 
                title="Gestión financiera"
                description="Si necesita ayuda con la contabilidad, en Västporten estamos listos para encargarnos de ello."
                imageSrc="/images/cardsHome/iluong-01.svg"
                imageAlt="gestion financiera"
                />
            </motion.div>
            <motion.div
                initial={{opacity:0, y:"15vh"}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:true, amount:0.1}}
                transition={{
                duration:1,
                ease:"easeOut"
                }}
            >
                <Card2
                title="Administración de propiedades"
                description="Con Nosotros puede estar seguro que todo funciona como deberia."
                imageSrc="/images/cardsHome/iluong-02.svg"
                imageAlt="adminitracion de propiedades"
                />
            </motion.div>
            <motion.div
                initial={{opacity:0, x:"10vw"}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once:true, amount:0.5}}
                transition={{
                duration:1,
                ease:"easeOut"
                }}
            >
                <Card2
                title="Gestión Técnica"
                description="A través de nuestra gestión técnica, recibirá asistencia con todo lo relacionado con la administración de la propiedad y el apoyo de la junta directiva."
                imageSrc="/images/cardsHome/iluong-03.svg"
                imageAlt="Gestion tecnica"
                />
            </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6 w-3/4 justify-items-center mx-auto pt-14 pb-25">
            <motion.div
                className="col-span-2 justify-end"
                initial={{opacity:0, x:"-10vw"}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once:true, amount:0.5}}
                transition={{
                duration:1.5,
                ease:"easeOut"
                }}
            >
                <Title title="Busca apartamento"/>
                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line pb-10">
                Envíenos un correo electrónico a <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">info@vastporten.se</a> , donde deberá describir su perfil y el tipo de apartamento que busca, así como el tamaño y el nivel de alquiler. Para ser admitido como inquilino, debe tener buen historial crediticio sin quejas de pago, ingresos estables y buenas referencias de antiguos propietarios.
                De acuerdo con las pautas del RGPD, NO incluya su número de seguro social en el correo electrónico, esto se solicitará en una etapa posterior.
                Si es necesario una vista, nos pondremos en contacto con usted.
                </p>
                <div className="w-2/5"><Button href="/contact">Contáctanos</Button></div>
            </motion.div>
            <motion.img
                src={"/images/living.webp"}
                alt=""
                height={456}
                width={451}
                className="h-full w-full rounded-[8px]"
                initial={{opacity:0, x:"10vw"}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once:true, amount:0.5}}
                transition={{
                duration:1.5,
                ease:"easeOut"
                }}        
            ></motion.img>
            </div>      
        <Footer />
        </div>
    );
}