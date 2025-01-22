export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-4 text-sm font-medium">
                    <li><a href="#" className="hover:text-yellow-500 transition">Inicio</a></li>
                    <li><a href="#about" className="hover:text-yellow-500 transition">About</a></li>
                    <li><a href="#narrative" className="hover:text-yellow-500 transition">Narrative</a></li>
                    <li><a href="#advertising" className="hover:text-yellow-500 transition">Advertising</a></li>
                    <li><a href="#music-videos" className="hover:text-yellow-500 transition">Music Videos</a></li>
                    <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
                </ul>
                <p className="text-sm text-gray-400">
                    &copy; 2025 Pedro Cornejo. Todos los derechos reservados.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                    Desarrollado por <a href="https://www.instagram.com/ramaahernandez" className="text-yellow-500 hover:underline">Ramiro Hernandez</a>.
                </p>
            </div>
        </footer>
    );
}
