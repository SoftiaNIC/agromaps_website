import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function About() {
    return (
        <section id="aboutt"
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed pt-20 pb-16 px-6 md:px-12"
            style={{
                backgroundImage: "url('/images/bg_Abot_Section.jpg')",
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* TEXTOS */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-['Poppins'] text-[#1C5937] leading-tight mb-6">
                        Cultiva con <br /> datos, cosecha <br /> con éxito
                    </h2>
                    <p className="text-base md:text-lg font-['Poppins'] text-gray-700 mb-8">
                        Agromaps es la plataforma inteligente que analiza la fertilidad de tu
                        suelo y te brinda recomendaciones ecológicas con inteligencia artificial
                        para optimizar tu producción y cuidar el medio ambiente
                    </p>

                    {/* BOTÓN */}
                    <Link
                        to="/web2"
                        className="inline-block bg-[#1C5937] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#145BE5]"
                    >
                        CONOCER AGROMAPS
                    </Link>
                </motion.div>

                {/* MOCKUP MOBILE - Solo visible en móvil */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, x: 10 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center relative w-full md:hidden"
                >
                    <img
                        src="/images/About/app_start.png"
                        alt="App Agromaps Mobile"
                        className="w-32 h-auto sm:w-40 drop-shadow-2xl transition-all duration-300 hover:scale-105"
                    />
                </motion.div>

                {/* MOCKUP DESKTOP - Solo visible en desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: -270 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:flex justify-end relative w-full"
                >
                    <img
                        src="/images/About/app_start.png"
                        alt="App Agromaps Desktop"
                        className="w-40 h-auto lg:w-48 xl:w-56 2xl:w-64 drop-shadow-2xl transition-all duration-300 hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
}
