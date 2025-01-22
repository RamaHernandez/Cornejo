"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/vimeo";

export default function AdvertisingPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Garantiza que este componente se renderice solo en el cliente
        setIsClient(true);
    }, []);

    const videos = [
        "https://vimeo.com/1014448175", // Primer video
        "https://vimeo.com/997849108",  // Segundo video
        "https://vimeo.com/916461459",  // Tercer video
        "https://vimeo.com/899367654",  // Cuarto video
        "https://vimeo.com/775634772",  // Quinto video
        "https://vimeo.com/846329663",  // Sexto video
        "https://vimeo.com/826907894",  // Séptimo video  
        "https://vimeo.com/1011392873"  // Décimo video
    ];

    if (!isClient) {
        // Evita la renderización en el servidor
        return null;
    }


    return (
        <section className="bg-black text-white py-12 px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Advertising</h2>
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