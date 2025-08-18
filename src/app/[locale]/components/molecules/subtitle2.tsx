type Props = {
    subtitle?: string;
    description?: string;
};

export const SubtitleHome = ({ subtitle, description }: Props) =>{
    return (
        <div className=" text-[#4C4C4C] text-center h-fit font-normal leading-relaxed w-3/4">
            {subtitle && (
            <h2 className="font-['Qwigley'] text-[70px] py-4">
                {subtitle}
            </h2>
            )}
            {description && (
            <p className="font-['Noto_Sans_Telugu'] text-[14px] whitespace-pre-line">
            {description}
            </p>
            )}
        </div>
    );
}