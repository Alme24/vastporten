import Link from "next/link";
import { ReactNode } from "react";
import '/styles/fonts.css'; 


type Variant = "default" | "btnHeader" | "btnHeaderWhite" | "btnDrop";

interface ButtonProps {
    href?: string;
    children: ReactNode;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    variant?: Variant;
    className?: string;
    onClick?: () => void;
}


const baseButtonStyles =
    "flex flex-row items-center justify-center font-['Noto_Sans_Telugu'] transition-all duration-100 gap-2";

const variantStyles: Record<Variant, string> = {
    default: "bg-[#E1EAEF] shadow-[4px_4px_14px_rgba(89,89,89,0.25)] text-textoscuro hover:bg-[#d5e0e6] font-bold text-[14px] lg:text-[16px] sm:text-[20px] p-2 lg:p-4 rounded-[8px]",
    btnHeader: "text-white px-2 py-2 font-normal text-[16px] hover:border-b-2 hover:border-white w-auto",
    btnHeaderWhite: "text-textoscuro px-2 py-2 font-normal text-[16px] hover:border-b-2 hover:border-textoscuro w-auto",
    btnDrop: "bg-[#F4F4F4] text-textoscuro px-2 py-4 font-normal text-[16px] hover:bg-white rounded-[8px]",
};

export default function Button({
    href,
    children,
    icon,
    iconPosition = "left",
    isLoading = false,
    variant = "default",
    className="",
    onClick,
}: ButtonProps) {
const finalClassName =
    `${baseButtonStyles} ${variantStyles[variant]} ` +
    `${isLoading ? "opacity-60 pointer-events-none " : ""}` +
    `${className}`;

    if (href) {
        return (
            <Link href={href} className={finalClassName}>
                {icon && iconPosition === "left" && <span aria-hidden>{icon}</span>}
                {isLoading ? <span>…</span> : children}
                {icon && iconPosition === "right" && <span aria-hidden>{icon}</span>}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={finalClassName}>
            {icon && iconPosition === "left" && <span aria-hidden>{icon}</span>}
            {isLoading ? <span>…</span> : children}
            {icon && iconPosition === "right" && <span aria-hidden>{icon}</span>}
        </button>
    );
}
