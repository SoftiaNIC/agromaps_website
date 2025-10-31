// src/components/SoilSection.tsx
import React from "react";
import { motion } from "framer-motion";

const SoilSection: React.FC = () => {
    return (
        <section
            className="relative w-full bg-white bg-cover bg-center py-20 px-6 md:px-20"
            style={{
                backgroundImage: "url('/images/bg_aprendeagmp.png')", // ⚡ Cambia esta ruta a tu imagen con mockup
            }}
        >
            {/* 🔹 Título superior */}
            <h3 className="text-green-900 font-extrabold text-2xl md:text-3xl text-center mb-30 uppercase tracking-wide">
                Aprende con Agromaps
            </h3>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* 🔹 Columna izquierda vacía (espacio para el mockup que está en el background) */}
                <div className="hidden md:block"></div>

                {/* 🔹 Columna derecha con texto */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Tipos de Suelos
                    </h2>
                    <p className="text-gray-700 leading-relaxed max-w-lg">
                        Al entrar a la app, el usuario puede explorar la función de Tipos de suelos. Allí la aplicación analiza el terreno seleccionado y muestra si el suelo es fértil para sembrar, si necesita abonarse o si está en buenas condiciones para mantener cultivos actuales. A través de gráficos sencillos y explicaciones claras, el agricultor aprende a diferenciar los distintos niveles de fertilidad y a comprender cómo influyen en el crecimiento de sus plantas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SoilSection;
