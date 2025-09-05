type Props = {
    subtitle?: string;
    description?: string;
};

export const Subtitle = ({ subtitle, description }: Props) => {
    return (
        <div className="font-family-noto-telugu text-textoscuro text-left h-fit leading-relaxed">
            {subtitle && (
            <h2 className="text-lg sm:text-[18px] font-bold py-4">
                {subtitle}
            </h2>
            )}
            {description && (
            <p className="md:text-base text-[14px] whitespace-pre-line text-justify">
            {description}
            </p>
            )}
        </div>
    );
};
