"use client";

import dynamic from "next/dynamic";

// Carga dinámica de ReactPlayer, solo en el cliente
const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

export default function MusicVideosPage() {
    const videos = [
        "https://vimeo.com/775636439", // Video 1
        "https://vimeo.com/396365064", // Video 2
    ];

    return (
        <section id="music-videos" className="bg-black text-white py-12 px-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center font-smooch uppercase">
                Music Videos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((url, index) => (
                    <div
                        key={index}
                        className="relative w-full aspect-video overflow-hidden rounded-lg mx-auto"
                        style={{ maxWidth: "600px" }}
                    >
                        <ReactPlayer
                            url={url}
                            width="100%"
                            height="100%"
                            controls
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
