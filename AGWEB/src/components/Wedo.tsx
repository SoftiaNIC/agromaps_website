import { motion } from "framer-motion";
import mockupImage from "../assets/images/Hacer/Mckoup1.png";

export default function WhatWeDo() {
    return (
        <section
            className="relative w-full py-30 bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: "url('/images/BG_Hacemos.png')", // tu ruta del bg logo
            }}
        >
            {/* Overlay para dar contraste */}
            <div className="absolute inset-0 bg-white/70"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Título */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C5937] font-poppins mb-6">
                    ¿Qué Hacemos en Agromaps?
                </h2>

                {/* Párrafo */}
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
                    En Agromaps conectamos la agricultura con la tecnología. Nuestro
                    sistema analiza la composición del suelo y te ofrece recomendaciones
                    precisas para mejorar la productividad y cuidar el medio ambiente.
                </p>

                {/* Botón */}
                <a
                    href="#"
                    className="px-6 py-3 bg-[#1C5937] text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:bg-[#449C7C] hover:scale-105"
                >
                    Ver Web de Aplicación
                </a>

                {/* Imagen del Mockup con animación */}
                <motion.div
                    className="mt-12"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <img
                        src={mockupImage}
                        alt="Agromaps Mockup"
                        className="mx-auto max-w-full drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}
