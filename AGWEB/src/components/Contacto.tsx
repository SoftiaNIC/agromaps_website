// src/components/Contacto.tsx
import { motion } from "framer-motion";
import React from "react";

const Contacto: React.FC = () => {
    return (
        <section className="py-16 px-6 bg-white" id="contacto">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-10 font-[Poppins]">
                    HABLA CON NOSOTROS
                </h2>

                {/* Contenedor principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Formulario */}
                    <motion.div
                        className="bg-green-900 text-white rounded-2xl p-6 md:p-8 shadow-lg"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6">CONTÁCTANOS</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="p-3 rounded-md bg-green-700 text-white placeholder-gray-200 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    className="p-3 rounded-md bg-green-700 text-white placeholder-gray-200 outline-none"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Correo"
                                className="w-full p-3 rounded-md bg-green-700 text-white placeholder-gray-200 outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Celular"
                                className="w-full p-3 rounded-md bg-green-700 text-white placeholder-gray-200 outline-none"
                            />
                            <textarea
                                placeholder="Mensaje"
                                className="w-full p-3 rounded-md bg-green-700 text-white placeholder-gray-200 outline-none h-28 resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-white text-green-900 font-bold py-3 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2"
                            >
                                Enviar Mensaje
                                <img
                                    src="//public/icons/logoagromaps-01.svg"
                                    alt="Agromaps"
                                    className="w-5 h-5"
                                />
                            </button>
                        </form>
                    </motion.div>

                    {/* Video con borde verde */}
                    <motion.div
                        className="rounded-2xl border-4 border-green-900 overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <video
                            src="/videos/aggmmp.mp4" 
                            controls
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
