"use client";
import Header from "@/app/[locale]/components/organism/header";
import Footer from "@/app/[locale]/components/organism/footer";
import CanvaAnimated from "@/app/[locale]/components/molecules/canvaAnimated"
import { motion } from "framer-motion";
import { SubtitleHome } from "@/app/[locale]/components/molecules/subtitle2";
import { Card2 } from "@/app/[locale]/components/organism/card2";
import { Title } from "@/app/[locale]/components/molecules/Title";
import Button from "@/app/[locale]/components/molecules/boton";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReportError from "../organism/reportError";
export default function Main(){
    const t = useTranslations("main");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

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
                subtitle={t("subtitulo")}
                description={t("descripcion")}
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
            className="justify-items-center w-full sm:w-3/5 mx-auto"
            initial={{opacity:0, y:"10vh"}}
            whileInView={{opacity:1, y:0.5}}
            viewport={{once:true, amount:0}}
            transition={{
                duration:1,
                ease:"easeOut"
            }}
            >
            <SubtitleHome
                subtitle={t("subtitulo2")}
                description={t("descripcion2")}
            />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-20 pb-14 justify-items-center w-11/12 lg:w-3/4 mx-auto">
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
                title={t("card1.titulo")}
                description={t("card1.descripcion")}
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
                title={t("card2.titulo")}
                description={t("card2.descripcion")}
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
                title={t("card3.titulo")}
                description={t("card3.descripcion")}
                imageSrc="/images/cardsHome/iluong-03.svg"
                imageAlt="Gestion tecnica"
                />
            </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 lg:w-3/4 justify-items-center mx-auto pt-14 pb-25">
                {/* Imagen primero en mobile */}
                <motion.img
                    src={"/images/living.webp"}
                    alt="Living room"
                    height={456}
                    width={451}
                    className="h-full w-full rounded-[8px] order-1 lg:order-2"
                    initial={{ opacity: 0, x: "10vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    }}
                />
                {/* Texto */}
                <motion.div
                    className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center"
                    initial={{ opacity: 0, x: "-10vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    }}
                >
                    <Title title={t("busca")} />
                    <p className="font-['Noto_Sans_Telugu'] sm:text-[16px] text-[#4C4C4C] text-[12px] text-left leading-relaxed whitespace-pre-line pb-10">
                    {t.rich("emailText", {
                        a: (chunks) => (
                        <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">
                            {chunks}
                        </a>
                        ),
                    })}
                    </p>
                    <div className="w-full lg:w-2/5">
                    <Button href="/contact">{t("contactanos")}</Button>
                    </div>
                </motion.div>
            </div>
            <Footer onOpenModal={handleOpenModal}/>
        {isModalOpen && <ReportError onClose={handleCloseModal} /> }
        </div>
    );
}