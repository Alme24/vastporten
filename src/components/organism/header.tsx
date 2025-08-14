
import DropDownMenu from "@/components/molecules/dropDownMenu";
import Button from "@/components/molecules/boton";
import Image from "next/image";

export default function Header({ transparent = false }: { transparent?: boolean }) {


    return (
        <header
        className={`fixed w-full h-[112px] flex justify-between px-4 py-4 z-50 ${
            transparent ? "bg-transparent" : "bg-[linear-gradient(179.8deg,rgba(0,0,0,0.70)_8.36%,rgba(0,0,0,0)_96.63%)]"
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
                { label: "Gestión financiera", href: "financialManagement"},
                { label: "Otros servicios", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"},
            ]}
            />
            <Button href="/search" variant="btnHeader">
            Buscar apartamento
            </Button>
            <Button href="/politics" variant="btnHeader">
            Política de privacidad
            </Button>
            <Button href="/whyChooseUs" variant="btnHeader">
            ¿Por qué Nosotros?
            </Button>
            <Button href="/contact" variant="btnHeader">
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


