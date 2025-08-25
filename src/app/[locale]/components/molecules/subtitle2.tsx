type Props = {
    subtitle?: string;
    description?: string;
};

export const SubtitleHome = ({ subtitle, description }: Props) =>{
    return (
        <div className="mx-auto text-textoscuro text-center h-fit font-normal leading-relaxed w-3/4 justify-center">
            {subtitle && (
            <h2 className="font-['Qwigley'] text-[50px] py-4 sm:text-[70px]">
                {subtitle}
            </h2>
            )}
            {description && (
            <p className="font-['Noto_Sans_Telugu'] text-[14px] md:text-[16px] whitespace-pre-line">
            {description}
            </p>
            )}
        </div>
    );
}