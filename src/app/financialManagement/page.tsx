import React from 'react'
import Header from '@/components/organism/header'
import CanvaVideo from '@/components/molecules/canvaVideo'
import { Title } from '@/components/molecules/Title'
import { Card } from '@/components/organism/card'
import FinancialCards from '@/components/molecules/financialCards'
import Footer from '@/components/organism/footer'

export default function page() {
  return (
    <>
    <div className='flex flex-col items-center'>
      <Header />
      <CanvaVideo
        videoSrc='video/bg2.mp4'
        altText='video'
        title='Gestión Financiera en Borås'
      />
      <div className='w-49/100 text-center font-family-noto-telugu text-textoscuro font-[400] text-[16px] my-60'>
        <p>Si necesita ayuda con la contabilidad, en Västporten estamos listos para encargarnos de ello. Con asesoramiento experto, le guiaremos en la dirección correcta en la negociación de préstamos, el cálculo de proyectos y demás planificación financiera actual.</p>
        <p>Sabemos cómo gestionar las finanzas de forma eficiente e inteligente para que puedas dedicar tiempo y dinero a otras cosas. Con nosotros como tu gestor, siempre te sentirás seguro y tendrás acceso a ayuda personalizada cuando la necesites.</p>
      </div>
      <FinancialCards />

      <div className=' mt-40'>
        <Title title='Servicios de gestión financiera' />
      </div>
      <section className='w-3/4 mt-10'>
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
      </section>
      <div className=' mt-40'>
        <Title title='Seguro y fácil' />
      </div>
        <div className='w-49/100 text-center font-family-noto-telugu text-textoscuro font-[400] text-[16px] mt-4 mb-40'>
        <p>Västporten ofrece soluciones integrales para propietarios y adapta la gestión para brindarle la ayuda que necesita. Por supuesto, no dude en contactarnos si tiene alguna pregunta financiera o necesita asesoramiento y apoyo legal o sobre sus finanzas inmobiliarias.</p>
        <p>Al contratarnos para la gestión financiera, le quedará tiempo y dinero para otras cosas</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
