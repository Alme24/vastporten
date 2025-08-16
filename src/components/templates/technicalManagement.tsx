"use client";
import CanvaVideo from "@/components/molecules/canvaVideo";
import { motion } from "framer-motion";
import { Title } from "@/components/molecules/Title";
import { Card } from "@/components/organism/card";
import Footer from "@/components/organism/footer";
import Image from "next/image";
import Header from "@/components/organism/header";

export default function Technical(){
    return(
        <div>
        <Header />
        <CanvaVideo
            videoSrc='video/bg3.mp4'
            altText='video'
            title='Gestión Técnica en Borås'
        />
        <motion.p
            className="font-family-noto-telugu text-normal text-center text-textoscuro w-3/4 mx-auto py-40"
            initial= {{opacity:0, y:"20vh"}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false, amount:0}}
            transition={{
            duration:2,
            ease:"easeIn"
            }}
        >
            A través de nuestra gestión técnica, recibirá asistencia con todo lo relacionado con la administración de la propiedad y el apoyo de la junta directiva. Le ayudamos a mantener la comodidad y la seguridad, así como todas las funciones previstas de la propiedad. Junto con usted, también podemos prolongar la vida útil de la propiedad y garantizar que se eviten o minimicen daños de diversos tipos.
            Con nosotros, cada cliente es único y nuestro objetivo es que todos reciban una gestión técnica de primera clase, adaptada a sus expectativas y necesidades. Nuestro enfoque holístico es valioso y único, y nos permite ofrecerle exactamente la solución que busca, justo cuando la necesita.
        </motion.p>
        <div className="relative w-full lg:h-[730px]">
            <Image
            src={"/images/cards/casa.webp"}
            alt=""
            fill
            style={{ objectFit: "cover"}}
            />
            <motion.div
            className="absolute top-8 left-12 bg-white rounded-[8px] text-center font-family-noto-telugu gap-4 px-8 py-14 w-5/12 shadow-inner text-textoscuro"
            initial={{opacity:0, x:"-20vw"}}
            whileInView={{opacity:1, x:0}}
            viewport={{once: false, amount:0.2}}
            transition={{
                duration: 3,
                ease: "easeOut"
            }}
            >
            <h2 className="text-[20px] font-bold">Adaptado a tus necesidades</h2>
            <p className="text-[14px] font-normal">
                En Västporten ofrecemos soluciones integrales a todos aquellos propietarios que quieran evitarse parte de la gestión administrativa o poder prescindir de 
                ella por completo.
                Todas nuestras colaboraciones comienzan con un diálogo cercano con usted, donde tendrá la oportunidad de describir con más detalle en qué necesita ayuda, como junta directiva o propietario. Con base en sus deseos, le presentamos una propuesta para una solución permanente que se ajuste a sus necesidades y le brinde los mayores beneficios financieros. Por supuesto, también podemos ayudarle a comparar otros proveedores para garantizar que las medidas y ofertas se adapten 
                óptimamente a su propiedad.
                Para su seguridad, trabajamos siempre con total transparencia y puede seguir nuestro trabajo en curso y participar en los documentos y otros materiales cuando lo desee. También le ofreceremos un seguimiento continuo. Si necesita ajustar el trabajo, nuestro acuerdo o está considerando trabajos adicionales, simplemente contacte a uno de nuestros gerentes y lo organizaremos.
            </p>
            </motion.div>
        </div>
        <div className="px-30 py-18 justify-items-center">
            <Title title="Servicios de gestión técnica"/>
            <div className="py-10">
            <Card
                number="01"
                title="Planificación del mantenimiento"
                description="Le ayudamos a desarrollar y revisar planes de mantenimiento que incluyen presupuestos personalizados para la gestión
                financiera. Mediante una gestión de proyectos y adquisiciones rentables, también garantizamos que pueda cumplir con el de mantenimiento."
                imageAlt=""
                imageSrc="/images/cards/gestionTecnica1.webp"
                imagePosition="left"
            />
            <Card
                number="02"
                title="Mantenimiento"
                description="Gestionamos proyectos y garantizamos la calidad de sus contratos secundarios más importantes, así como también de los trabajos de mantenimiento planificados futuros."
                imageAlt=""
                imageSrc="/images/cards/gestionTecnica2.webp"
                imagePosition="right"
            />
            <Card
                number="03"
                title="Mejoras de la propiedad"
                description="¿Desea mejorar su propiedad de alguna manera? En Västporten le ayudamos a investigar y realizar análisis de necesidades para la optimización operativa y energética, así como para un desarrollo inmobiliario adecuado."
                imageAlt=""
                imageSrc="/images/cards/gestionTecnica3.webp"
                imagePosition="left"
            />
            <Card
                number="04"
                title="Apoyo de la junta"
                description="Entréguenos la base de sus informes financieros y elaboraremos para usted informes mensuales, trimestrales y anuales, tanto de balance, flujo de caja como de resultados."
                imageAlt=""
                imageSrc="/images/cards/gestionTecnica4.webp"
                imagePosition="right"
            />
            <Card
                number="05"
                title="Contactos de autoridad"
                description="¿Le resulta difícil y complicado, como a muchos otros, contactar con compañías de seguros, autoridades y municipios? En Västporten, podemos ayudarle. Por supuesto, también puede contactarnos para obtener asesoramiento o resolver sus dudas sobre el contacto."
                imageAlt=""
                imageSrc="/images/cards/gestionTecnica5.webp"
                imagePosition="left"
            />
            <Card
                number="06"
                title="Informes de emergencia y averías"
                description="En Västporten, valoramos el contacto personal con cada cliente y nos mantenemos siempre disponibles para que pueda obtener servicio y respuestas rápidamente cuando lo necesite. Ofrecemos un servicio completo de atención al cliente para la notificación de averías y el servicio de guardia. Si desea realizar un seguimiento de los informes de averías, tiene acceso completo a estadísticas y otros documentos."
                imageAlt=""
                imageSrc="/images/cards/gestionTecnica6.webp"
                imagePosition="right"
            />
            </div>
        </div>
        <Footer />
        </div>
    );
}