import Image from "next/image";
import Link from "next/link";
interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href?: string;
}

export function Card2({
    title,
    description,
    imageSrc,
    imageAlt,
    href,
}: CardProps) {
    return (
        <Link href= {href ? href : '#'}>
            <div className="font-family-noto-telugu text-[#4C4C4C] rounded-[8px] bg-base-de-botoones w-83 h-90 shadow-xl/20 justify-items-center hover:scale-105">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-auto h-1/2 px-12 py-8"
                    width={300}
                    height={300}
                />
                <div className="gap-4 text-center items-center p-4">
                    <h2 className="font-[600] text-[20px]">{title}</h2>
                    <p className="text-normal text-[12px]">{description}</p>
                </div>
            </div>
        </Link>
    );
}