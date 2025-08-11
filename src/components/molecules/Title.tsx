type Props = {
    title: string;
    description?: string;
};

export const Title = ({ title, description }: Props) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
        </div>
    );
}