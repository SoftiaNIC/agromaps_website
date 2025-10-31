import { motion } from "framer-motion";

export default function Aprender() {
    return (
        <section id="apren" className="relative w-full h-[500px] md:h-[600px] lg:h-[740px] overflow-hidden">
            {/* Background Image */}
            <img
                src="/images/Bg_aprender.png"
                alt="Background Aprender"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Contenido principal */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center">

                {/* Imagen principal con texto y árbol */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                >
                    <img
                        src="/images/mundo.png"
                        alt="Texto y árbol"
                        className="w-full max-w-4xl lg:max-w-5xl h-auto object-contain"
                    />
                </motion.div>

                {/* Barra CTA Desktop - solo visible en desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="hidden lg:flex justify-center lg:justify-end w-full max-w-7xl mx-auto px-4 lg:px-8"
                >
                    <div className="bg-emerald-700 rounded-xl px-8 py-4 shadow-lg min-w-[500px] lg:min-w-[600px]">
                        <div className="flex justify-between items-center">
                            {/* Texto izquierdo */}
                            <span className="text-white font-semibold text-lg">
                                + 500 Personas Aprendiendo
                            </span>
                            
                            {/* Botón derecho */}
                            <a
                                href="#aprender"
                                className="text-white font-semibold text-lg hover:text-emerald-200 transition-colors duration-300"
                            >
                                Aprender
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Botón CTA Mobile - solo visible en mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:hidden flex justify-center w-full px-4"
                >
                    <a
                        href="#aprender"
                        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 w-full max-w-sm text-center"
                    >
                        Aprender
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
