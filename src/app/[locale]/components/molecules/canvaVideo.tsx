"use client";
import { useTranslations } from "next-intl";
import { useEffect,useRef } from "react";
interface CanvaVideoProps {
    videoSrc: string;
    altText: string;
    title: string;
}

export default function CanvaVideo({
    videoSrc, title, altText
}: CanvaVideoProps) {
    const t = useTranslations('canvaVideo');
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video de fondo */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                aria-label={altText}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={videoSrc} type="video/mp4" />
                {t('video')}
            </video>

            {/* Overlay oscuro con opacidad */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10" />

            {/* Contenido encima del video */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl font-semibold font-family-noto-telugu">{title}</h1>
            </div>
        </div>
    );
}
