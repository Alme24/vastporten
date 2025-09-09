"use client";
import { useState, useEffect } from "react";
import DropDownMenu from "@/app/[locale]/components/molecules/dropDownMenu";
import Button from "@/app/[locale]/components/molecules/boton";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

export default function Header() {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleResize(); // set inicial

        return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        };
    }, []);

  // Condiciones de estilo
    const headerClasses = `
        fixed w-full h-[112px] flex justify-between items-center px-6 py-4 z-50 transition-colors duration-300
        ${isOpen ? "bg-white" : scrolled ? "bg-white" : "bg-[linear-gradient(179.8deg,rgba(0,0,0,0.70)_8.36%,rgba(0,0,0,0)_96.63%)]"}
    `;

    const buttonVariant = isMobile ? "btnHeaderWhite" : scrolled ? "btnHeaderWhite" : "btnHeader";
    const imagenVariant = isOpen ? "/images/logotipo1.svg" : scrolled ? "/images/logotipo1.svg" : "/images/vastporten 2.svg";

  return (
    <header className={headerClasses}>
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={imagenVariant}
          alt="Vastporten Logo"
          width={140}
          height={40}
        />
      </Link>

      {/* Botón hamburguesa (mobile) */}
      <button
        className={`lg:hidden  ${isOpen ? "text-textoscuro" : scrolled ? "text-textoscuro" : "text-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      
      <nav className="hidden lg:flex items-center gap-6">
        <DropDownMenu
            mainLabel={t("servicio")}
            mobile="setIsMobile"
            variant={buttonVariant}
            items={[
                { label: t("label.administracion"), href: "adminProperties" },
                { label: t("label.tecnica"), href: "technicalManagement" },
                { label: t("label.financiera"), href: "financialManagement" },
                { label: t("label.otros"), href: "services" },
            ]}
        />
        <Button href="/search" variant={buttonVariant}>
          {t("buscar")}
        </Button>
        <Button href="/politics" variant={buttonVariant}>
          {t("politica")}
        </Button>
        <Button href="/whyChooseUs" variant={buttonVariant}>
          {t("porQueNosotros")}
        </Button>
        <Button href="/documents" variant={buttonVariant}>
          {t("documentos")}
        </Button>
        <Button href="/contact" variant={buttonVariant}>
          {t("contacto")}
        </Button>
        <Button
          href="tel:033480196"
          icon={
            <Image
              src="/images/phone_in_talk.svg"
              alt="Phone"
              width={28}
              height={28}
            />
          }
          iconPosition="left"
        >
          033-48 01 96
        </Button>
      </nav>

      {/* NAV mobile desplegable */}
      {isOpen && (
        <nav className="absolute top-[112px] left-0 w-full px-6 bg-white flex flex-col justify-items-center gap-4 py-6 lg:hidden">
          <DropDownMenu
            mainLabel={t("servicio")}
            mobile="isMobile"
            items={[
              { label: t("label.administracion"), href: "adminProperties" },
              { label: t("label.tecnica"), href: "technicalManagement" },
              { label: t("label.financiera"), href: "financialManagement" },
              { label: t("label.otros"), href: "services" },
            ]}
          />
          <Button href="/search" variant="btnHeaderWhite">
            {t("buscar")}
          </Button>
          <Button href="/politics" variant="btnHeaderWhite">
            {t("politica")}
          </Button>
          <Button href="/whyChooseUs" variant="btnHeaderWhite">
            {t("porQueNosotros")}
          </Button>
          <Button href="/contact" variant="btnHeaderWhite">
            {t("contacto")}
          </Button>
          <Button
            href="tel:033480196"
            icon={
              <Image
                src="/images/phone_in_talk.svg"
                alt="Phone"
                width={28}
                height={28}
              />
            }
            iconPosition="left"
            
          >
            033-48 01 96
          </Button>
        </nav>
      )}
    </header>
  );
}




