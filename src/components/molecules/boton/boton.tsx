import Link from "next/link";
import { ReactNode } from "react";


type Variant = "default" | "primary" | "secondary";

interface ButtonProps {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    variant?: Variant;
    className?: string;
}

//  Estilos base 
const baseButtonStyles =
    "flex flex-row justify-center items-center gap-4 px-4 py-2 " +
    "w-[193px] h-[54px] rounded-[8px] font-semibold transition-colors duration-200";
// Variantes 
const variantStyles: Record<Variant, string> = {
    default: "bg-[#E1EAEF] shadow-[4px_4px_14px_rgba(89,89,89,0.25)] text-black hover:bg-[#d5e0e6]",
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 shadow"
};

export default function Button({
    href,
    children,
    icon,
    iconPosition = "left",
    isLoading = false,
    variant = "default",
    className=""
}: ButtonProps) {
const finalClassName =
    `${baseButtonStyles} ${variantStyles[variant]} ` +
    `${isLoading ? "opacity-60 pointer-events-none " : ""}` +
    `${className}`;

    return (
        <Link
        href={href}
        className={finalClassName}
        >
        {icon && iconPosition === "left" && <span aria-hidden>{icon}</span>}
        {isLoading ? <span>…</span> : children}
        {icon && iconPosition === "right" && <span aria-hidden>{icon}</span>}
        </Link>
    );
}
