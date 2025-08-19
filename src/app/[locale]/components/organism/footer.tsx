import React from "react";
import Button from "@/app/[locale]/components/molecules/boton";
import Image from "next/image";
import '/styles/fonts.css'; 
import { useTranslations } from "next-intl";
export default function Footer() {
    const t = useTranslations("footer");
    return(
        <footer className="w-full bg-white flex justify-center py-5">
            <div className="flex justify-center items-center gap-8 max-w-4xl w-full px-4 py-5 border-t-1 border-t-gray-300">
                <div className="flex flex-col gap-4">
                    <Button 
                        href="tel:033480196"
                        icon={<Image src="/images/phone_in_talk.svg" alt="Phone" width={28} height={28} />}
                        iconPosition="left"
                    >033-48 01 96</Button>
                    <Button
                        href="/contact"
                    >{t("contactanos")}</Button>
                    <Button 
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        icon={<Image src="/images/error.svg" alt="Phone" width={28} height={28} />}
                        iconPosition="left"
                    >{t("reportarError")}</Button>
                </div>
                <div className="text-[#4C4C4C]  leading-relaxed whitespace-pre-line font-normal text-[16px] font-['Noto_Sans_Telugu'] max-w-md">
                    <p className="whitespace-pre-line">
                        {t("direccion")}
                    </p>
                    <p className="mt-4">
                        {t("envianos")}
                        <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">
                            info@vastporten.se
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}