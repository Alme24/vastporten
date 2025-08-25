"use client";
import CanvaVideo from "@/app/[locale]/components/molecules/canvaVideo";
import { motion } from "framer-motion";
import { Title } from "@/app/[locale]/components/molecules/Title";
import Card from "@/app/[locale]/components/organism/card";
import Footer from "@/app/[locale]/components/organism/footer";
import Image from "next/image";
import Header from "@/app/[locale]/components/organism/header";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReportError from "../organism/reportError";
export default function Technical() {
  const t = useTranslations("technicalManagement");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header />
      <CanvaVideo
        videoSrc="/video/bg3.mp4"
        altText="video"
        title={t("tituloVideo")}
      />
      <motion.p
        className="font-family-noto-telugu text-normal md:text-center text-justify text-textoscuro w-3/4 mx-auto my-15 md:my-40"
        initial={{ opacity: 0, y: "20vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
      >
        {t("descripcion")}
      </motion.p>
      <div className="hidden lg:flex relative w-full lg:h-[920px]">
        <Image
          src={"/images/cards/casa.webp"}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
        <motion.div
          className="absolute top-8 left-12 bg-white rounded-[8px] text-center font-family-noto-telugu gap-4 px-8 py-14 w-5/12 shadow-inner text-textoscuro"
          initial={{ opacity: 0, x: "-20vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h2 className="text-[20px] font-bold">{t("subtitulo")}</h2>
          <p className="text-[16px] mt-3">{t("descripcion2")}</p>
        </motion.div>
      </div>

      <div className="flex flex-col lg:hidden relative">
        {/* Contenedor de texto */}
        <motion.div
          className="bg-white text-center font-family-noto-telugu gap-4 p-8 rounded-2xl shadow-inner/25 mb-10 text-textoscuro w-7/8 mx-auto z-20 relative "
          initial={{ opacity: 0, x: "-20vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h2 className="text-2xl font-bold">{t("subtitulo")}</h2>
          <p className="lg:text-4 text-justify mt-3">{t("descripcion2")}</p>
        </motion.div>

        {/* Contenedor de la imagen */}
        <div className="relative w-full h-[350px] -mt-30 sm:-mt-0 mb-20">
          {" "}
          {/* Aquí ajustamos la altura y el margen negativo */}
          <Image
            src={"/images/cards/casa-mobile.png"}
            alt=""
            layout="fill" // Hace que la imagen llene el contenedor
            objectFit="cover" // Asegura que la imagen cubra el contenedor sin deformarse
            className="absolute top-0 left-0 z-30" // Asegura que la imagen quede debajo del texto
          />
        </div>
      </div>

      <div className="md:mt-20 mb-10 w-3/4 justify-items-center mx-auto">
        <Title title={t("titulo1")} />
        <div className="md:py-10">
          <Card
            number="01"
            title={t("card1.titulo")}
            description={t("card1.descripcion")}
            imageAlt=""
            imageSrc="/images/cards/gestionTecnica1.webp"
            imagePosition="left"
          />
          <Card
            number="02"
            title={t("card2.titulo")}
            description={t("card2.descripcion")}
            imageAlt=""
            imageSrc="/images/cards/gestionTecnica2.webp"
            imagePosition="right"
          />
          <Card
            number="03"
            title={t("card3.titulo")}
            description={t("card3.descripcion")}
            imageAlt=""
            imageSrc="/images/cards/gestionTecnica3.webp"
            imagePosition="left"
          />
          <Card
            number="04"
            title={t("card4.titulo")}
            description={t("card4.descripcion")}
            imageAlt=""
            imageSrc="/images/cards/gestionTecnica4.webp"
            imagePosition="right"
          />
          <Card
            number="05"
            title={t("card5.titulo")}
            description={t("card5.descripcion")}
            imageAlt=""
            imageSrc="/images/cards/gestionTecnica5.webp"
            imagePosition="left"
          />
          <Card
            number="06"
            title={t("card6.titulo")}
            description={t("card6.descripcion")}
            imageAlt=""
            imageSrc="/images/cards/gestionTecnica6.webp"
            imagePosition="right"
          />
        </div>
      </div>
      <Footer onOpenModal={handleOpenModal} />
      {isModalOpen && <ReportError onClose={handleCloseModal} />}
    </div>
  );
}
