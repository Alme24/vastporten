"use client";
import DropDownMenu from "@/app/[locale]/components/molecules/dropDownMenu";
import Button from "@/app/[locale]/components/molecules/boton";
import Image from "next/image";
import Link from "next/link";
import { useTranslations  } from "next-intl"
export default  function Header({ transparent = false }: { transparent?: boolean }) {
    const t =  useTranslations('Header');

    return (
        <header
        className={`fixed w-full h-[112px] flex justify-between items-center px-4 py-4 z-50 ${
            transparent ? "bg-transparent" : "bg-[linear-gradient(179.8deg,rgba(0,0,0,0.70)_8.36%,rgba(0,0,0,0)_96.63%)]"
        }`}
        >
        <Link  href={"/page"}>
            <Image src="/images/vastporten 2.svg"
                alt="Vastporten Logo"
                width={140}
                height={40}
                
            />
        </Link>
        <nav className="flex items-center gap-6">
            <DropDownMenu
            mainLabel={t('servicio')}
            items={[
                { label: t('label.administracion'), href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"},
                { label: t('label.tecnica'), href: "technicalManagement"},
                { label: t('label.financiera'), href: "financialManagement"},
                { label: t('label.otros'), href: "services"},
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
                href="tel:033480196"
                icon={<Image src="/images/phone_in_talk.svg" alt="Phone" width={28} height={28} />}
                iconPosition="left">
                033-48 01 96
            </Button>
        </nav>
        </header>
    );
};


