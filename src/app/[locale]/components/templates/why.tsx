"use client";
import Header from "../organism/header";
import Footer from "../organism/footer";
import { Title } from "../molecules/Title";
import { Subtitle } from "../molecules/subtitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
export default function Why(){
    const t = useTranslations("why");
    return (
        <div>
            <Header></Header>
            <div className="bg-white h-28 pb-14"></div>
            <div className="relative w-full h-[330px]">
                <Image
                    src="/images/desk.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                />

                <motion.div
                className="items-center justify-center absolute top-1/3 left-1/4"
                initial={{ x: "-100vw" }} 
                animate={{ x: 0 }} 
                transition={{
                    duration: 3,
                    ease: "easeOut",
                }}
                >
                    <Subtitle subtitle={t("titulo")} />
                    <Title title={t("titulo2")} />
                </motion.div>
            </div>

            <motion.p
                className="font-['Noto_Sans_Telugu'] text-[#4C4C4C] leading-relaxed text-center text-[14px] font-normal py-18 max-w-2/3 mt-4 justify-items-center mx-auto"
                initial={{ opacity: 0, x: "40vw" }} 
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                duration: 3,
                ease: "easeOut",
                }}
            >{t("contenido")}</motion.p>

            <motion.div
                className="grid grid-cols-[400px_auto] gap-x-10 p-8 mb-40 items-center justify-items-center bg-[#F4F4F4] rounded-[8px] w-4/5 mx-auto shadow-lg"
                initial={{ opacity: 0, y: "40vh" }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0 }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                }}
            >
                <Image
                    src="/images/image25.webp"
                    alt=""
                    width={400}
                    height={424}
                />
                <Subtitle description={t("subtitulo")}></Subtitle>
            </motion.div>
            <Footer></Footer>
        </div>
    );
}