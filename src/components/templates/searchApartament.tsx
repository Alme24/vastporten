"use client";
import Image from "next/image";
import Header from "@/components/organism/header";
import Footer from "@/components/organism/footer";
import { Title } from "@/components/molecules/Title";
import Button from "@/components/molecules/boton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function Search(){
    const [startAnimation, setStartAnimation] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div>
            <section className="relative min-h-screen">
                <Image
                src="/images/imagen23.webp"
                alt=""
                priority
                fill
                className="object-cover mask-bottom-gradient -z-10"
                />
                <Header />
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-2/5 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <div className="w-3/4">
                        <Title 
                            title="¿Busca apartamento?"
                        />
                        <p className="font-['Noto_Sans_Telugu'] text-[16px] text-[#4C4C4C] font-normal text-left leading-relaxed mb-8 whitespace-pre-line">
                            Envíenos un correo electrónico a <a href="mailto:info@vastporten.se" className="text-[#4E6D9A]">info@vastporten.se</a>, donde deberá describir su perfil y el tipo de apartamento que busca, así como el tamaño y el nivel de alquiler. Para ser admitido como inquilino, debe tener buen historial crediticio sin quejas de pago, ingresos estables y buenas referencias de antiguos propietarios. {"\n"}
                            {"\n"}
                            De acuerdo con las pautas del RGPD, NO incluya su número de seguro social en el correo electrónico, esto se solicitará en una etapa posterior.{"\n"}
                            {"\n"}
                            Si es necesaria una visita, nos pondremos en contacto con usted.
                        </p>
                        <Button className="px-10">Contáctanos</Button>
                    </div>
                </motion.div>
            </section>
            <Footer />
        </div>
    );
}