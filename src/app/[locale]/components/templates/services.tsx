"use client";
import Header from "../organism/header";
import Footer from "../organism/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Title } from "../molecules/Title";
import { Subtitle } from "../molecules/subtitle";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReportError from "../organism/reportError";
export default function OurServices() {
    const t = useTranslations("services");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <div>
            <Header />
            <div className="relative h-[100vh] w-full">
                <Image
                    src="/images/silla.webp"
                    alt=""
                    fill
                    className="object-cover mask-bottom-gradient z-0"
                >
                </Image>
                <motion.div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, y: "20vh" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut"
                    }}
                >
                    <Title title={t("titulo")} />
                </motion.div>
            </div>

            <motion.p
                className="font-family-noto-telugu text-textoscuro leading-relaxed w-5/6 lg:text-center text-justify text-[14px] md:text-[16px] font-normal lg:max-w-1/2 md:my-50 my-20 justify-items-center mx-auto"
                initial={{ opacity: 0, y: "20vh" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut"
                }}
            >
                {t("descripcion")}
            </motion.p>

            <motion.div
                className="justify-items-center py-8 px-10 md:max-w-3/4 lg:max-w-1/3 my-15 mx-auto bg-[#F4F4F4] rounded-[8px] shadow-lg"
                initial={{ opacity: 0, x: "-50vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
            >
                <Subtitle subtitle={t("lista.titulo")} />
                <ul className="font-family-noto-telugu text-[14px] text-textoscuro font-normal text-left leading-relaxed list-disc pl-6">
                    <li>{t("lista.1")}</li>
                    <li>{t("lista.2")}</li>
                    <li>{t("lista.3")}</li>
                    <li>{t("lista.4")}</li>
                    <li>{t("lista.5")}</li>
                    <li>{t("lista.6")}</li>
                    <li>{t("lista.7")}</li>
                    <li>{t("lista.8")}</li>
                    <li>{t("lista.9")}</li>
                    <li>{t("lista.10")}</li>
                    <li>{t("lista.11")}</li>
                    <li>{t("lista.12")}</li>
                    <li>{t("lista.13")}</li>
                    <li>{t("lista.14")}</li>
                    <li>{t("lista.15")}</li>
                </ul>
            </motion.div>


            <motion.div
                className="justify-items-center w-3/4 mx-auto md:my-40 mb-10"
                initial={{ opacity: 0, x: "-50vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
            >
                <Title title={t("subtitulo")} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2 justify-items-center mt-0 md:mt-5">
                    <Image
                        src={"/images/hombres.webp"}
                        alt=""
                        width={333}
                        height={344}
                        className="w-full h-auto"
                    />
                    <div className="col-span-2 w-auto lg:ml-10 md:mt-0 mt-5">
                        <Subtitle description={t("descripcion2")} />
                    </div>
                </div>
            </motion.div>
            <Footer onOpenModal={handleOpenModal} />
            {isModalOpen && <ReportError onClose={handleCloseModal} />}
        </div>
    );
}