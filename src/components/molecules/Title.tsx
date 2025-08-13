type Props = {
    title: string;
    description?: string;
};

export const Title = ({ title, description }: Props) => {
    return (
        <div className="text-left">
            <h1 
                className="color-textoscuro" 
                style={{ 
                    fontFamily: 'Noto Sans Telugu', 
                    fontSize: '48px', 
                    fontWeight: 600 
                }}
            >
                {title}
            </h1>
            {description && <p className="text-sm color-textoscuro mt-2">{description}</p>}
        </div>
    );
}
