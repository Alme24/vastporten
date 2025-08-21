"use client"
import Image from "next/image";
import Header from "@/app/[locale]/components/organism/header";
import Footer from "@/app/[locale]/components/organism/footer";
import { Title } from "@/app/[locale]/components/molecules/Title";
import '/styles/fonts.css';
import { Subtitle } from "../molecules/subtitle";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReportError from "../organism/reportError";
export default function Politica() {
    const t = useTranslations("politicas");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bg-white">
            <Header />

            <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center lg:justify-items-end">
                <div className="px-8 lg:px-16 pt-28 lg:pt-36">
                    <Title
                        title={t("titulo")}
                    />
                    <Subtitle
                        description={t("descripcion")}
                    >
                    </Subtitle>
                    <Subtitle
                        subtitle={t("subtitulo")}
                        description={t("contenido")}>
                    </Subtitle>
                </div>
                <div className="mt-10 lg:-mt-2">
                    <Image
                        src="/images/Rectangle-21.webp"
                        alt="Imagen de oficina"
                        width={692}
                        height={984}
                        className="w-auto h-full flex-shrink-0 mask-bottom-gradient z-0"
                    />
                </div>
            </div>
            <div className="text-left w-full px-8 pt-1 lg:px-16 mb-40">
                <Subtitle
                    subtitle={t("subtitulo2")}
                    description={t("contenido2")}
                ></Subtitle>

                <div className="p-8 justify-items-center">
                    <Subtitle
                        subtitle={t("subtitulo3")}
                    ></Subtitle>
                    <ul className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed list-disc pl-6">
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
                    </ul>
                </div>

                <Subtitle
                    description={t("contenido4")}
                ></Subtitle>
                <Subtitle
                    subtitle={t("subtitulo5")}
                    description={t("descripcion5")}
                ></Subtitle>
                <Subtitle
                    subtitle={t("subtitulo6")}
                ></Subtitle>
                <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed whitespace-pre-line">
                    {t.rich('descripcion6', {
                        a: (chunks) => <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">{chunks}</a>,
                    })}
                </p>
                <Subtitle
                    subtitle={t("subtitulo7")}
                    description={t("descripcion7")}
                ></Subtitle>
            </div>
            <Footer onOpenModal={handleOpenModal} />
            {isModalOpen && <ReportError onClose={handleCloseModal} />}
        </div>
    );
}