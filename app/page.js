"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/imagen1.png",
  "/images/imagen2.png",
  "/images/imagen3.png",
  "/images/imagen4.png",
  "/images/imagen5.png",
  "/images/imagen6.png",
  "/images/A2.png",
  "/images/C3.png",
  "/images/C6.png",
  "/images/C1.png",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcamos que el componente está en el cliente
    setIsClient(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo
  }, []);

  // Evita renderizar el carrusel en el servidor
  if (!isClient) {
    return null;
  }

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Contenedor de las imágenes escalonadas */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute inset-0 bg-black z-10 mix-blend-overlay"></div>

        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className={`absolute w-[300px] sm:w-[400px] lg:w-[500px] brightness-50 object-cover transition-transform duration-1000 ease-in-out rounded-lg shadow-lg ${index === currentImage
              ? "z-10 scale-100 rotate-0"
              : index < currentImage
                ? "z-0 scale-90 -rotate-6"
                : "z-0 scale-90 rotate-6"
              }`}
            style={{
              transformOrigin: "center",
            }}
          />
        ))}
      </div>

      {/* Texto en primer plano */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">


        {/* Contenedor de los botones */}
        <div className="mt-8 flex justify-center space-x-4">
          {/* Botón para ir a Proyectos */}
          <a
            href="#advertising"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition"
          >
            Projects
          </a>
          {/* Botón para ir a Contacto */}
          <a
            href="#contact"
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        {/* Botón para ir a Proyectos */}
        <a
          href="#advertising"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition"
        >
          Ver Proyectos
        </a>
        {/* Botón para ir a Contacto */}
        <a
          href="#contact"
          className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition"
        >
          Contactar
        </a>
      </div>

    </section>
  );

}
