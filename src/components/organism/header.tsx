import React from "react";
import DropDownMenu from "@/components/molecules/dropDownMenu";
import Button from "@/components/molecules/boton";
import Image from "next/image";

export default function Header({ transparent = true }: { transparent?: boolean }) {
    return (
        <header
        className={`w-full flex justify-between px-4 py-4 ${
            transparent ? "bg-transparent" : "bg-white"
        }`}
        >
        <Image src="/images/vastporten 2.svg"
            alt="Vastporten Logo"
            width={140}
            height={40}
        />
        <nav className="flex items-center gap-6">
            <DropDownMenu
            mainLabel="Servicio"
            items={[
                { label: "Administración de propiedades", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"},
                { label: "Gestión técnica", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"},
                { label: "Gestión financiera", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"},
                { label: "Otros servicios", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"},
            ]}
            />
            <Button href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" variant="btnHeader">
            Buscar apartamento
            </Button>
            <Button href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" variant="btnHeader">
            Política de privacidad
            </Button>
            <Button href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" variant="btnHeader">
            ¿Por qué Nosotros?
            </Button>
            <Button href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" variant="btnHeader">
            Contacto
            </Button>
            <Button 
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                icon={<Image src="/images/phone_in_talk.svg" alt="Phone" width={28} height={28} />}
                iconPosition="left">
                033-48 01 96
            </Button>
        </nav>
        </header>
    );
};


