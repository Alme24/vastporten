"use client";
import Header from "../organism/header";
import Footer from "../organism/footer";
import { Title } from "../molecules/Title";
import { Subtitle } from "../molecules/subtitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReportError from "../organism/reportError";
export default function Why() {
    const t = useTranslations("why");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <div>
            <Header />
            <div className="bg-white h-28 pb-14"></div>
            <div className="relative w-full h-[330px]">
                <Image
                    src="/images/desk.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                />

                <motion.div
                    className="items-center justify-center absolute top-1/3 left-1/10 lg:left-1/4"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <Subtitle subtitle={t("titulo")} />
                    <Title title={t("titulo2")} />
                </motion.div>
            </div>

            <motion.p
                className="font-family-noto-telugu text-textoscuro leading-relaxed md:text-center text-justify text-4 font-normal my-20 w-4/5 md:max-w-2/3 md:my-50 justify-items-center mx-auto"
                initial={{ opacity: 0, x: "40vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 1.3,
                    ease: "easeOut",
                }}
            >{t("contenido")}</motion.p>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-[400px_auto] gap-10 p-8 md:mb-40 mb-10 items-center justify-items-center bg-[#F4F4F4] rounded-[8px] md:w-4/5 mx-auto shadow-lg"
                initial={{ opacity: 0, y: "40vh" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
            >
                <Image
                    src="/images/image25.webp"
                    alt=""
                    width={400}
                    height={424}
                    className="w-full h-auto"
                />
                <Subtitle description={t("subtitulo")}></Subtitle>
            </motion.div>
            <Footer onOpenModal={handleOpenModal} />
            {isModalOpen && <ReportError onClose={handleCloseModal} />}
        </div>
    );
}