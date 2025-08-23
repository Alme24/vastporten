"use client";

import { motion } from "framer-motion";
import InfoAdminProperties from "../molecules/infoAdminProperties";
import Header from "../organism/header";
import CanvaVideo from "../molecules/canvaVideo";
import Footer from "../organism/footer";
import Card from "../organism/card";
import { Variants, easeInOut } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReportError from "../organism/reportError";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};
export default function AdminProperties() {
  const t = useTranslations('adminProperties');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <CanvaVideo
        videoSrc='/video/bg1.mp4'
        altText='video'
        title={t('titulo')}
      />
      <motion.div
        className="text-[16px] text-textoscuro font-family-noto-telugu w-3/4 sm:w-1/2 mx-auto my-15 md:my-40 md:text-center text-justify"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <p className="whitespace-pre-line">{t('descripcion')}</p>
      </motion.div>
      <InfoAdminProperties />
      <div className="w-3/4 m-auto">
        <h1 className=" text-3xl md:text-5xl md:text-center text-textoscuro font-[600] md:my-10">{t('subtitulo')}</h1>
      </div>
      <section className='w-3/4 mt-10 md:mb-40 mb-10'>
        <Card
          number='01'
          title={t("card1.titulo")}
          description={t("card1.descripcion")}
          imageSrc='/images/cards/admProp1.webp'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='02'
          title={t("card2.titulo")}
          description={t("card2.descripcion")}
          imageSrc='/images/cards/admProp2.webp'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='03'
          title={t("card3.titulo")}
          description={t("card3.descripcion")}
          imageSrc='/images/cards/admProp3.webp'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='04'
          title={t("card4.titulo")}
          description={t("card4.descripcion")}
          imageSrc='/images/cards/admProp4.webp'
          imageAlt='alter'
          imagePosition='right'
        />
        <Card
          number='05'
          title={t("card5.titulo")}
          description={t("card5.descripcion")}
          imageSrc='/images/cards/admProp5.webp'
          imageAlt='alter'
          imagePosition='left'
        />
        <Card
          number='06'
          title={t("card6.titulo")}
          description={t("card6.descripcion")}
          imageSrc='/images/cards/admProp6.webp'
          imageAlt='alter'
          imagePosition='right'
        />

        <Card
          number='07'
          title={t("card7.titulo")}
          description={t("card7.descripcion")}
          imageSrc='/images/cards/admProp7.jpg'
          imageAlt='alter'
          imagePosition='left'
        />
      </section>

      <Footer onOpenModal={handleOpenModal} />
      {isModalOpen && <ReportError onClose={handleCloseModal} />}
    </div>
  );
}