interface CanvaVideoProps {
    videoSrc: string;
    altText: string;
    title: string;
}

export default function CanvaVideo({
    videoSrc, title, altText
}: CanvaVideoProps) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                aria-label={altText}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta el formato de video.
            </video>
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl font-semibold font-family-noto-telugu">{title}</h1>
            </div>
        </div>
    );
}