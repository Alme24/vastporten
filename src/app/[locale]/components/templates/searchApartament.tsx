"use client";
import Image from "next/image";
import Header from "@/app/[locale]/components/organism/header";
import Footer from "@/app/[locale]/components/organism/footer";
import { Title } from "@/app/[locale]/components/molecules/Title";
import Button from "@/app/[locale]/components/molecules/boton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ReportError from "../organism/reportError";

export default function Search() {
    const [startAnimation, setStartAnimation] = useState(false);
    const t = useTranslations("searchApartament");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <section className="relative min-h-screen mb-10 md:mb-30">
                <Header />
                <Image
                    src="/images/imagen23.webp"
                    alt=""
                    priority
                    fill
                    className="object-cover mask-bottom-gradient -z-10"
                />
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute md:top-1/2 top-6/10 left-2/5 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/4 px-4 lg:px-10"
                >
                    <Title
                        title={t("titulo")}
                    />
                    <p className="font-family-noto-telugu text-[16px] text-textoscuro font-normal text-left leading-relaxed my-8 whitespace-pre-line">
                        {t.rich('descripcion', {
                            a: (chunks) => <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">{chunks}</a>,
                        })}
                    </p>
                    <Button className=" hidden md:flex md:w-2/5 " href="/contact">{t("contactanos")}</Button>
                
                </motion.div>
            </section>
            <Footer onOpenModal={handleOpenModal} />
            {isModalOpen && <ReportError onClose={handleCloseModal} />}
        </div>
    );
}