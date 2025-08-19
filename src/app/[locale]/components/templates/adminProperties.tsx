"use client";

import { motion } from "framer-motion";
import InfoAdminProperties from "../molecules/infoAdminProperties";
import Header from "../organism/header";
import CanvaVideo from "../molecules/canvaVideo";
import Footer from "../organism/footer";
import Card from "../organism/card";
import { Variants, easeInOut } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};
export default function AdminProperties() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CanvaVideo
        videoSrc='/video/bg1.mp4'
        altText='video'
        title='Administración de propiedades en Borås'
      />
      <motion.div
        className="text-[16px] text-textoscuro font-family-noto-telugu w-1/2 mx-auto my-40 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <p>Con nosotros en Västporten, puede estar seguro de que tanto el ambiente interior como el exterior se mantienen acogedores y agradables y que todo funciona exactamente como debería.</p>
        <p>Si busca un administrador de propiedades con amplia experiencia y un esfuerzo eficaz que se esfuerce por ofrecer un mantenimiento de alta calidad, contáctenos. Ofrecemos a todos nuestros clientes una gestión y mantenimiento de propiedades a medida, adaptados a sus necesidades, para generar beneficios para el usuario, aumento del valor y rentabilidad para usted y su propiedad.</p>
      </motion.div>
      <InfoAdminProperties />
      <div className="w-3/4 m-auto">
        <h1 className=" text-5xl text-textoscuro font-[600] text-center my-10">Servicios de administración de propiedades de Västporten</h1>
      </div>
      <section className='w-3/4 mt-10 mb-40'>
        <Card
          number='01'
          title='Inspección de la propiedad'
          description='Al contratarnos para la administración de su propiedad, puede estar seguro de que revisaremos su propiedad regularmente para garantizar que todo se mantenga en buen estado. Si surge algún problema, nos desplazamos rápidamente al lugar y le brindamos la asistencia que necesita.'
          imageSrc='/images/cards/admProp1.webp'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='02'
          title='Limpieza'
          description='Unas escaleras limpias y un entorno ordenado son acogedores y mejoran la impresión positiva de su propiedad. Estaremos encantados de ayudarle. También nos aseguramos de que las ventanas se mantengan limpias y que las lavanderías y otras áreas comunes se mantengan en óptimas condiciones.'
          imageSrc='/images/cards/admProp2.webp'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='03'
          title='Jardinería'
          description='En lo que respecta al césped y los parterres de su propiedad, puede confiar en nosotros. Nos aseguramos de que el césped se mantenga uniforme y bonito, y de que no crezcan malas hierbas en los parterres. Según las necesidades y la temporada, también podemos podar los árboles de la propiedad, cortar los setos y recoger las hojas que caen en otoño.'
          imageSrc='/images/cards/admProp3.webp'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='04'
          title='Retirada de nieve y protección antideslizante'
          description='El invierno trae muchas preocupaciones para los propietarios, pero nosotros lo hacemos más llevadero al encargarnos de la mayor parte de la tarea de retirar la nieve y las medidas antideslizantes. Nos aseguramos de que las entradas y los pasillos, así como los estacionamientos y las entradas de vehículos adyacentes a la propiedad, se mantengan libres de nieve y paleamos los techos para eliminar el riesgo de derrumbe. También lijamos las superficies de paso para que sean antideslizantes y, con la llegada de la primavera, volvemos para limpiar y retirar la arena.'
          imageSrc='/images/cards/admProp4.webp'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='05'
          title='Servicios y pequeños trabajos de carpintería'
          description='Cuando la asociación busca ayuda con algún trabajo menor de carpintería, estamos aquí para ayudarle y, por supuesto, también estaremos encantados de intervenir si algún residente necesita ayuda con tareas más sencillas.'
          imageSrc='/images/cards/admProp5.webp'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='06'
          title='Informes de emergencia y averías'
          description='La mayoría de las cosas ocurren cuando menos te lo esperas, pero en Västporten siempre estamos cerca para garantizar que recibas rápidamente la ayuda y el servicio adecuados cuando los necesites. Ofrecemos un servicio de atención al cliente completo para reportar errores las 24 horas, los 7 días de la semana, y respondemos con rapidez para resolver tus problemas.'
          imageSrc='/images/cards/admProp6.webp'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='07'
          title='Movimiento de tierras'
          description='Si desea mejorar el entorno local, por ejemplo, creando una zona de barbacoa u otro punto de encuentro para los residentes, podemos ayudarle. Para trabajos que no podamos realizar nosotros mismos, contamos con una amplia red de subcontratistas para ayudarle.'
          imageSrc='/images/cards/admProp7.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
      </section>

      <Footer />
    </div>
  );
}