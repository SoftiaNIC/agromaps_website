import { motion } from "framer-motion";

export default function CultivoSection() {
    return (
        <section
            id="cultivo"
            className="relative w-full h-[592px] flex items-center justify-center text-white overflow-hidden"
        >
            {/* Video de fondo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/vdsec.mp4"
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                    console.log("Error cargando video:", e);
                }}
            />

            {/* Overlay para oscurecer un poco el video */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-5xl px-4 text-center flex flex-col items-center space-y-6">

                {/* Tag Superior */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-4 py-2  bg-white/10 backdrop-blur border border-green-800 rounded-full text-sm hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2"
                >
                    <img src="/icons/stars.svg" alt="Estrellas" className="w-5 h-5" />
                    <span>Soluciones Personalizadas con IA</span>
                </motion.div>

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-2xl md:text-4xl font-bold leading-snug"
                >
                    Transforma tu forma de cultivar. Descubre la fertilidad de tu tierra y recibe recomendaciones ecológicas con inteligencia artificial.<br />
                </motion.h2>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200"
                >
                    <span className="text-green-300 font-semibold text-xl md:text-2xl">De la tierra a la nube, así de fácil</span>
                </motion.p>

                {/* Tags intermedios */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mt-4"
                >
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm hover:bg-[#01312D] transition-all duration-300 cursor-pointer flex items-center space-x-2">
                        <img src="/icons/lightning.svg" alt="Rápida" className="w-4 h-4" />
                        <span>Rápida App</span>
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm hover:bg-[#01312D] transition-all duration-300 cursor-pointer flex items-center space-x-2">
                        <img src="/icons/lock.svg" alt="Seguridad" className="w-4 h-4" />
                        <span>Seguridad</span>
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm hover:bg-[#01312D] transition-all duration-300 cursor-pointer flex items-center space-x-2">
                        <img src="/icons/update.svg" alt="Actualizaciones" className="w-4 h-4" />
                        <span>Actualizaciones y Mejoras</span>
                    </span>
                </motion.div>

                {/* Botones */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 mt-6"
                >
                    <button className="px-6 py-3 bg-gray-600 hover:bg-blue-600 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                        <img src="/icons/fire.svg" alt="Empezar" className="w-5 h-5" />
                        <span>Empezar YA!</span>
                    </button>
                    <button className="px-6 py-3 bg-gray-600 hover:bg-green-500 border border-white/30 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                        <img src="/icons/present.svg" alt="Probar" className="w-5 h-5" />
                        <span>Probar App</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
