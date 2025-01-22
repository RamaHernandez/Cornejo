"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">
            <div className="grid grid-cols-3 items-center">
                {/* Menú Hamburguesa (Solo en pantallas pequeñas) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden text-yellow-500 text-2xl justify-self-start"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Logo (Centro) */}
                <div className="text-center col-start-2">
                    <a href="#" className="text-white">
                        <h1 className="text-3xl font-bold">cornejo.</h1>
                        <p className="text-sm font-light whitespace-nowrap">Director of Photography</p>
                    </a>
                </div>

                {/* Links para pantallas grandes (Derecha) */}
                <ul
                    className="hidden sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:justify-center text-center col-start-0"
                    style={{
                        gridTemplateRows: "repeat(2, auto)", // Dos filas
                        gap: "0.1rem", // Espaciado entre columnas y filas
                    }}
                >
                    <li><a href="#about" className="hover:text-yellow-500 transition">About</a></li>
                    <li><a href="#narrative" className="hover:text-yellow-500 transition">Narrative</a></li>
                    <li><a href="#advertising" className="hover:text-yellow-500 transition">Advertising</a></li>
                    <li><a href="#music-videos" className="hover:text-yellow-500 transition">Music Videos</a></li>
                    <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
                </ul>
            </div>

            {/* Menú desplegable para pantallas pequeñas */}
            <ul
                className={`${isOpen ? "block" : "hidden"
                    } sm:hidden mt-4 space-y-2 text-center`}
            >
                <li><a href="#about" className="hover:text-yellow-500 transition">About</a></li>
                <li><a href="#narrative" className="hover:text-yellow-500 transition">Narrative</a></li>
                <li><a href="#advertising" className="hover:text-yellow-500 transition">Advertising</a></li>
                <li><a href="#music-videos" className="hover:text-yellow-500 transition">Music Videos</a></li>
                <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
            </ul>
        </nav>
    );
}
