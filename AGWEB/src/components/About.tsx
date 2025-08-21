import { motion } from "framer-motion";


export default function About() {
    return (
        <section id="aboutt"
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed py-16 px-6 md:px-12"
            style={{
                backgroundImage: "url('/images/bg_Abot_Section.jpg')",
            }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* TEXTOS */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-left"
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
                    <a
                        href="#web2.tsx"
                        className="inline-block bg-[#1C5937] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#145BE5]"
                    >
                        CONOCER AGROMAPS
                    </a>
                </motion.div>

                {/* IMAGEN DEL MOCKUP */}
                <motion.div
                    initial={{ opacity: 0, x: 80, y: -30 }}
                    whileInView={{ opacity: 1, x: -120 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center relative"
                >
                    <img
                        src="/src/assets/images/About/app_start.png"
                        alt="App Agromaps"
                        className="w-24 h-auto sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64 drop-shadow-2xl transition-all duration-300 hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
}
