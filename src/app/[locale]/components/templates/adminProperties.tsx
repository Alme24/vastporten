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
      <section className='w-3/4 my-10'>
        <Card
          number='01'
          title='Contabilidad'
          description='Si desea disponer de más tiempo para otras tareas, permítanos gestionar sus tareas contables, incluyendo la contabilización, el archivo y la contabilidad continua. También podemos gestionar cobros, facturas de clientes, desembolsos, recordatorios de pago, facturas de proveedores y la gestión de casos de ejecución de deudas.'
          imageSrc='/images/cards/gestionFinanciera1.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='02'
          title='Cuentas anuales'
          description='Si es necesario, en Västporten estaremos encantados de elaborar un estado financiero completo para que usted pueda presentarlo a su contador.'
          imageSrc='/images/cards/gestionFinanciera2.jpg'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='03'
          title='Lista de miembros/apartamentos y notificación'
          description='Si lo solicita, podemos encargarnos de sus registros de membresía, apartamento y propiedad, así como de todos los envíos de correo necesarios. Si también está cansado de enviar notificaciones, nos encargaremos de enviarlas y de hacer el seguimiento de las cuotas de membresía, etc.'
          imageSrc='/images/cards/gestionFinanciera3.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='04'
          title='Informes financieros'
          description='Entréguenos la base de sus informes financieros y elaboraremos para usted informes mensuales, trimestrales y anuales, tanto de balance, flujo de caja como de resultados'
          imageSrc='/images/cards/gestionFinanciera4.jpg'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='05'
          title='Contabilidad y tramitación de tasas e impuestos'
          description='Declaración del IVA, impuesto de sociedades y valoración de inmuebles, así como declaraciones de la renta y de la empresa. Le ayudamos con todo lo necesario y nos aseguramos de que todas las cifras sean correctas.'
          imageSrc='/images/cards/gestionFinanciera5.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='06'
          title='Contacto con las autoridades'
          description='Podemos representarle ante consultas de la Agencia Tributaria y otras autoridades competentes en materia financiera. También puede solicitar nuestra ayuda si necesita apoyo para gestionar sus estadísticas.'
          imageSrc='/images/cards/gestionFinanciera6.jpg'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='07'
          title='Contacto con las autoridades'
          description='Podemos representarle ante consultas de la Agencia Tributaria y otras autoridades competentes en materia financiera. También puede solicitar nuestra ayuda si necesita apoyo para gestionar sus estadísticas.'
          imageSrc='/images/cards/gestionFinanciera6.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
      </section>

      <Footer />
    </div>
  );
}