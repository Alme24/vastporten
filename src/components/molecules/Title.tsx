type Props = {
    title: string;
    description?: string;
};

export const Title = ({ title, description }: Props) => {
    return (
        <div className="text-center">
            <h1 className="color-textoscuro font-noto-telugu" style={{ fontSize: '48px', fontWeight: 600 }}>{title}</h1>
            {description && <p className="text-sm color-textoscuro mt-2">{description}</p>}
        </div>
    );
}