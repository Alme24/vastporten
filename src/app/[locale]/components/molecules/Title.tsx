type Props = {
    title: string;
    description?: string;
};

export const Title = ({ title, description }: Props) => {
    return (
        <div className="text-left">
            <h1 
                className="text-textoscuro font-family-noto-telugu text-[32px] sm:text-5xl font-[600]" 
            >
                {title}
            </h1>
            {description && <p className="text-sm sm:text-[16px] color-textoscuro mt-2">{description}</p>}
        </div>
    );
}
