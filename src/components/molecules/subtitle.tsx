type Props = {
    subtitle?: string;
    description?: string;
};

export const Subtitle = ({ subtitle, description }: Props) => {
    return (
        <div className="font-['Noto_Sans_Telugu'] text-[#4C4C4C] text-left leading-relaxed">
            {subtitle && (
            <h2 className="text-lg sm:text-[20px] font-bold py-4">
                {subtitle}
            </h2>
            )}
            {description && (
            <p className="text-[16px] font-normal whitespace-pre-line">
            {description}
            </p>
            )}
        </div>
    );
};
