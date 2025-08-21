import { motion } from "framer-motion";

export default function Hero() {
    const brands = [
        "/public/icons/CarouselLOG.svg",
        "/public/icons/CarouselLOG.svg",
        "/public/icons/CarouselLOG.svg",
        "/public/icons/CarouselLOG.svg",
        "/public/icons/CarouselLOG.svg",
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
            <div className="flex flex-row items-center justify-center gap-12 mt-16">
                {/* Barras Izquierda - 2 columnas con posicionamiento en "V" */}
                <div className="flex flex-row gap-6 items-end">
                    {leftImages.map((img, i) => (
                        <div
                            key={i}
                            className={`relative w-20 h-80 rounded-full overflow-hidden group cursor-pointer shadow-lg ${
                                i === 0 ? 'mt-8' : 'mt-16' // Primera imagen más alta
                            }`}
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

                {/* Imagen Central - Posicionada más abajo para crear la "V" */}
                <div className="relative w-80 h-60 rounded-2xl overflow-hidden shadow-xl group cursor-pointer mx-8 mt-16">
                    <img
                        src={centerImage.defaultSrc}
                        alt="Center"
                        className="w-full h-full object-cover group-hover:hidden transition duration-600"
                    />
                    <img
                        src={centerImage.hoverSrc}
                        alt="Center-hover"
                        className="w-full h-full object-cover hidden group-hover:block transition duration-1000"
                    />
                </div>

                {/* Barras Derecha - 2 columnas con posicionamiento en "V" */}
                <div className="flex flex-row gap-6 items-end">
                    {rightImages.map((img, i) => (
                        <div
                            key={i}
                            className={`relative w-20 h-80 rounded-full overflow-hidden group cursor-pointer shadow-lg ${
                                i === 1 ? 'mt-8' : 'mt-16' // Cuarta imagen más alta (segunda de la derecha)
                            }`}
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

            {/* Carousel de marcas - Iconos más grandes y visibles */}
            <div className="w-full overflow-hidden relative h-25 mt-16 mb-8">
                <motion.div
                    className="flex gap-20 w-[170%]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {brands.concat(brands).map((logo, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <img
                                src={logo}
                                alt={`AGROMAPS Logo ${i}`}
                                className="h-35 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
