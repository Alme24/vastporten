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
        <div className={`flex flex-col-reverse lg:flex-row ${imagePosition === "right" ? "lg:flex-row-reverse" : ""} gap-6`}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                className="w-full lg:w-1/2 grayscale-50"
                width={500}
                height={300}
            />

            <div className="flex flex-col justify-end lg:w-1/2 py-4 lg:px-2">
                <div className="shadow-xl/20  rounded-xl w-[60px] lg:w-[148px] h-[60px] lg:h-[105px] flex justify-center items-center">
                    <label className="text-textoscuro text-2xl lg:text-[100px] font-family-noto-serif-telugu tracking-[0] leading-[100%] font-[800] text-center">{number}</label>
                </div>
                <h3 className="mt-4 text-[20px] text-textoscuro font-family-noto-telugu font-[700]">{title}</h3>
                <p className="mt-2 font-family-noto-telugu text-textoscuro font-[400] text-[14px] lg:text-[16px] text-justify">{description}</p>
            </div>
        </div>
    );
}
