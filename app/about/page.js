"use client";

export default function AboutPage() {
    return (
        <section id="about" className="bg-black text-white min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-12">
            {/* Texto principal */}
            <div className="max-w-4xl text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Capturing Stories through the Lens
                </h1>
                <p className="text-lg sm:text-xl font-light text-gray-300">

                    With a passion for the visual and a focus on narrative, I transform
                    everyday moments in pieces of cinematographic art.
                </p>
            </div>

            {/* Diseño de dos columnas */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                {/* Columna de texto */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-lg sm:text-xl font-light text-gray-300 mb-6 leading-relaxed">
                        I am Pedro Cornejo, an Ecuadorian-born cinematographer trained in Buenos Aires and now based in Mexico City. My work combines a gritty, subversive aesthetic with a refined edge, drawing inspiration from film, music, and fashion.
                    </p>
                    <p className="text-lg sm:text-xl font-light text-gray-300 leading-relaxed">
                        I have collaborated on major campaigns as well as independent projects, always striving to tell stories that jolt the senses, spark curiosity, and defy convention. I am passionate about exploring new forms of visual expression and believe that unforgettable storytelling demands bold choices. Each project is my opportunity to experiment with light, shadow, and texture, pursuing that irreverent beauty that makes us feel truly alive.
                    </p>
                </div>

                {/* Columna de imagen */}
                <div className="lg:w-1/2">
                    <img
                        src="/images/about-image.JPG"
                        alt="Sobre mí"
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}

