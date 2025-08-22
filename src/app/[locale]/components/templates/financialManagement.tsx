"use client"
import React, { useState } from 'react'
import Header from '@/app/[locale]/components/organism/header'
import CanvaVideo from '@/app/[locale]/components/molecules/canvaVideo'
import { Title } from '@/app/[locale]/components/molecules/Title'
import Card from '@/app/[locale]/components/organism/card'
import FinancialCards from '@/app/[locale]/components/molecules/financialCards'
import Footer from '@/app/[locale]/components/organism/footer'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import ReportError from '../organism/reportError'
export default function FinancialManagement() {
  const t = useTranslations('financialManagement');

  const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);


  return (
    <div className=' '>
      <Header />
      <div className='flex flex-col items-center'>
        <CanvaVideo
          videoSrc='/video/bg2.mp4'
          altText='video'
          title={t("titulo")}
        />
        <motion.div className='md:w-1/2 w-3/4 text-center font-family-noto-telugu text-textoscuro font-[400] text-[16px] md:my-60 my-20'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <p className='whitespace-pre-line'>{t("descripcion")}</p>
        </motion.div>
        <FinancialCards />

      <div className=' mt-40 w-3/4'>
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
      <div className=' md:mt-40 mt-10'>
        <Title title={t('subtitulo2')} />
      </div>
        <div className='md:w-49/100 w-3/4 text-center font-family-noto-telugu text-textoscuro font-[400] text-[16px] mt-4 md:mb-40 mb-10'>
        <p className='whitespace-pre-line'>{t('descripcion2')}</p>
      </div>
      </div>
      <Footer onOpenModal={handleOpenModal}/>
        {isModalOpen && <ReportError onClose={handleCloseModal} /> }
    </div>
  )
}
