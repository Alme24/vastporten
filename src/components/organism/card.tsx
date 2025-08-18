import Image from "next/image";

interface CardProps {
    number: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
}

export default function Card({
    number,
    title,
    description,
    imageSrc,
    imageAlt,
    imagePosition = "left"
}: CardProps) {
    return (
        <div className={`flex flex-col md:flex-row ${imagePosition === "right" ? "md:flex-row-reverse" : ""} gap-6`}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                className="w-full md:w-1/2 grayscale-50"
                width={500}
                height={300}
            />

            <div className="flex flex-col justify-end md:w-1/2 p-4">
                <div className="shadow-xl/20  rounded-xl w-[148px] h-[105px] flex justify-center items-center">
                    <label className="text-textoscuro text-[100px] font-family-noto-serif-telugu tracking-[0] leading-[100%] font-[800] text-center">{number}</label>
                </div>
                <h3 className="mt-4 text-[20px] text-textoscuro font-family-noto-telugu font-[700]">{title}</h3>
                <p className="mt-2 font-family-noto-telugu text-textoscuro font-[400] text-[16px]">{description}</p>
            </div>
        </div>
    );
}
