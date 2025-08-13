import Image from "next/image";
import Header from "../organism/header";
import Footer from "../organism/footer";
import { Title } from "../molecules/Title";
import Button from "../molecules/boton";

export default function Search(){
    return (
        <div>
            <section className="relative">
                <Image
                src="/images/image22.webp"
                alt=""
                priority
                fill
                className="object-cover mask-bottom-gradient -z-10"
                />
                <div className="relative z-10">
                    <Header />
                    <div className="pl-7 pb-18 pt-33 lg:pl-14 bg:pb-36 bg:pt-66 w-1/2">
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
                </div>
            </section>
            <Footer />
        </div>
    );
}