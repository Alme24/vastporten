"use client"
import React from 'react'
import Header from '@/app/[locale]/components/organism/header'
import CanvaVideo from '@/app/[locale]/components/molecules/canvaVideo'
import { Title } from '@/app/[locale]/components/molecules/Title'
import Card from '@/app/[locale]/components/organism/card'
import FinancialCards from '@/app/[locale]/components/molecules/financialCards'
import Footer from '@/app/[locale]/components/organism/footer'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
export default function FinancialManagement() {
  const t = useTranslations('financialManagement')

  return (
    <>
      <div className='flex flex-col items-center'>
        <Header />
        <CanvaVideo
          videoSrc='/video/bg2.mp4'
          altText='video'
          title='Gestión Financiera en Borås'
        />
        <motion.div className='w-1/2 text-center font-family-noto-telugu text-textoscuro font-[400] text-[16px] my-60'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <p>Si necesita ayuda con la contabilidad, en Västporten estamos listos para encargarnos de ello. Con asesoramiento experto, le guiaremos en la dirección correcta en la negociación de préstamos, el cálculo de proyectos y demás planificación financiera actual.</p>
          <p>Sabemos cómo gestionar las finanzas de forma eficiente e inteligente para que puedas dedicar tiempo y dinero a otras cosas. Con nosotros como tu gestor, siempre te sentirás seguro y tendrás acceso a ayuda personalizada cuando la necesites.</p>
        </motion.div>
        <FinancialCards />

      <div className=' mt-40'>
        <Title title={t('subtitulo')} />
      </div>
      <section className='w-3/4 mt-10'>
        <Card
          number='01'
          title={t('card1.titulo')}
          description={t('card1.descripcion')}
          imageSrc='/images/cards/gestionFinanciera1.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='02'
          title={t('card2.titulo')}
          description={t('card2.descripcion')}
          imageSrc='/images/cards/gestionFinanciera2.jpg'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='03'
          title={t('card3.titulo')}
          description={t('card3.descripcion')}
          imageSrc='/images/cards/gestionFinanciera3.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='04'
          title={t('card4.titulo')}
          description={t('card4.descripcion')}
          imageSrc='/images/cards/gestionFinanciera4.jpg'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='05'
          title={t('card5.titulo')}
          description={t('card5.descripcion')}
          imageSrc='/images/cards/gestionFinanciera5.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='06'
          title={t('card6.titulo')}
          description={t('card6.descripcion')}
          imageSrc='/images/cards/gestionFinanciera6.jpg'
          imageAlt='alter'
          imagePosition='right'
        />
      </section>
      <div className=' mt-40'>
        <Title title={t('subtitulo2')} />
      </div>
        <div className='w-49/100 text-center font-family-noto-telugu text-textoscuro font-[400] text-[16px] mt-4 mb-40'>
        <p className='whitespace-pre-line'>{t('descripcion2')}</p>
      </div>
    </div>
    <Footer />
    </>
  )
}
