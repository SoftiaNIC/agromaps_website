import { motion } from "framer-motion";

export default function Hero() {
    const brands = [
        "/public/images/logo-agromaps-001.png",
        "/public/images/logo-agromaps-001.png",
        "/public/images/logo-agromaps-001.png",
        "/public/images/logo-agromaps-001.png",
        "/public/images/logo-agromaps-001.png",
    ];

    // Configuración de imágenes (default + hover)
    const leftImages = [
        {
            defaultSrc: "/src/assets/images/Hero/Property1=Default.png",
            hoverSrc: "/src/assets/images/Hero/Property1=Variant2.png",
        },
        {
            defaultSrc: "/src/assets/images/Hero/Property2=Default.png",
            hoverSrc: "/src/assets/images/Hero/Property2=Variant2.png",
        },
    ];

    const centerImage = {
        defaultSrc: "/src/assets/images/Hero/Property3=Default.png",
        hoverSrc: "/src/assets/images/Hero/Property3=Variant2.png",
    };

    const rightImages = [
        {
            defaultSrc: "/src/assets/images/Hero/Property4=Default.png",
            hoverSrc: "/src/assets/images/Hero/Property4=Variant2.png",
        },
        {
            defaultSrc: "/src/assets/images/Hero/Property5=Default.png",
            hoverSrc: "/src/assets/images/Hero/Property5=Variant2.png",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[90vh] flex flex-col justify-between items-center bg-white overflow-hidden"
        >
            {/* Contenedor central */}
            <div className="flex flex-row items-center justify-center gap-8 mt-16">
                {/* Barras Izquierda - 2 columnas */}
                <div className="flex flex-row gap-6">
                    {leftImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative w-20 h-80 rounded-full overflow-hidden group cursor-pointer shadow-lg"
                        >
                            <img
                                src={img.defaultSrc}
                                alt={`Left-${i}`}
                                className="w-full h-full object-cover group-hover:hidden transition duration-500"
                            />
                            <img
                                src={img.hoverSrc}
                                alt={`Left-hover-${i}`}
                                className="w-full h-full object-cover hidden group-hover:block transition duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Imagen Central */}
                <div className="relative w-80 h-60 rounded-2xl overflow-hidden shadow-xl group cursor-pointer mx-8">
                    <img
                        src={centerImage.defaultSrc}
                        alt="Center"
                        className="w-full h-full object-cover group-hover:hidden transition duration-600"
                    />
                    <img
                        src={centerImage.hoverSrc}
                        alt="Center-hover"
                        className="w-full h-full object-cover hidden group-hover:block transition duration-600"
                    />
                </div>

                {/* Barras Derecha - 2 columnas */}
                <div className="flex flex-row gap-6">
                    {rightImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative w-20 h-80 rounded-full overflow-hidden group cursor-pointer shadow-lg"
                        >
                            <img
                                src={img.defaultSrc}
                                alt={`Right-${i}`}
                                className="w-full h-full object-cover group-hover:hidden transition duration-500"
                            />
                            <img
                                src={img.hoverSrc}
                                alt={`Right-hover-${i}`}
                                className="w-full h-full object-cover hidden group-hover:block transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel de marcas */}
            <div className="w-full overflow-hidden relative h-20 mt-10">
                <motion.div
                    className="flex gap-16 w-[200%]" // <- ancho extendido
                    animate={{ x: ["0%", "-50%"] }} // <- se mueve la mitad
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {brands.concat(brands).map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt={`brand-${i}`}
                            className="h-20 object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
