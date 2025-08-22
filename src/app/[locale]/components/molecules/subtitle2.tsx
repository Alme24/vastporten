type Props = {
    subtitle?: string;
    description?: string;
};

export const SubtitleHome = ({ subtitle, description }: Props) =>{
    return (
        <div className=" text-[#4C4C4C] text-center h-fit font-normal leading-relaxed w-3/4">
            {subtitle && (
            <h2 className="font-['Qwigley'] text-[50px] py-4 sm:text-[70px]">
                {subtitle}
            </h2>
            )}
            {description && (
            <p className="font-['Noto_Sans_Telugu'] text-[12px] sm:text-[16px] whitespace-pre-line">
            {description}
            </p>
            )}
        </div>
    );
}