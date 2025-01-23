"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/vimeo";

export default function NarrativePage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Forzamos la renderización en el cliente
        setIsClient(true);
    }, []);

    const videos = [
        "https://vimeo.com/431639589",
        "https://vimeo.com/880272689",
        "https://vimeo.com/775634772",
        "https://vimeo.com/803614191",
    ];

    if (!isClient) {
        // Evitamos la renderización en el servidor
        return null;
    }

    return (
        <section id="narrative" className="bg-black text-white py-12 px-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center font-smooch uppercase">
                Narrative
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
