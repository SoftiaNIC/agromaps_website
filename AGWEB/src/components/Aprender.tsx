import { motion } from "framer-motion";

export default function Aprender() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[740px] overflow-hidden">
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
                
                {/* Botón CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="#aprender"
                        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300"
                    >
                        Aprender
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
