import { motion } from "framer-motion";

// Componente para las barras laterales (izquierda y derecha)
interface ImageBarProps {
    defaultSrc: string;
    hoverSrc: string;
    alt: string;
    className?: string;
}

const ImageBar = ({ defaultSrc, hoverSrc, alt, className = "" }: ImageBarProps) => (
    <div className={`relative w-20 h-80 rounded-full overflow-hidden group cursor-pointer shadow-lg ${className}`}>
        <img
            src={defaultSrc}
            alt={alt}
            className="w-full h-full object-cover group-hover:hidden transition duration-500"
        />
        <img
            src={hoverSrc}
            alt={`${alt}-hover`}
            className="w-full h-full object-cover hidden group-hover:block transition duration-500"
        />
    </div>
);

// Componente para la imagen central
interface CenterImageProps {
    defaultSrc: string;
    hoverSrc: string;
    alt: string;
    className?: string;
}

const CenterImage = ({ defaultSrc, hoverSrc, alt, className = "" }: CenterImageProps) => (
    <div className={`relative w-100 h-60 rounded-2xl overflow-hidden shadow-xl group cursor-pointer ${className}`}>
        <img
            src={defaultSrc}
            alt={alt}
            className="w-full h-full object-cover group-hover:hidden transition duration-600"
        />
        <img
            src={hoverSrc}
            alt={`${alt}-hover`}
            className="w-full h-full object-cover hidden group-hover:block transition duration-1000"
        />
    </div>
);

export default function Hero() {
    const brands = [
        "/icons/CarouselLOG.svg",
        "/icons/CarouselLOG.svg",
        "/icons/CarouselLOG.svg",
        "/icons/CarouselLOG.svg",
        "/icons/CarouselLOG.svg",
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
            {/* Contenedor central con layout horizontal y posicionamiento individual */}
            <div className="flex flex-row items-center justify-center gap-16 mt-16 relative">
                {/* Primera imagen izquierda - Posicionada más arriba */}
                <ImageBar
                    defaultSrc={leftImages[0].defaultSrc}
                    hoverSrc={leftImages[0].hoverSrc}
                    alt="Left-1"
                    className="mt-0"
                />

                {/* Segunda imagen izquierda - Posicionada más abajo */}
                <ImageBar
                    defaultSrc={leftImages[1].defaultSrc}
                    hoverSrc={leftImages[1].hoverSrc}
                    alt="Left-2"
                    className="mt-20"
                />

                {/* Imagen central - En el medio con su propia altura */}
                <CenterImage
                    defaultSrc={centerImage.defaultSrc}
                    hoverSrc={centerImage.hoverSrc}
                    alt="Center"
                    className="mx-6 mt-35"
                />

                {/* Primera imagen derecha - Posicionada más abajo */}
                <ImageBar
                    defaultSrc={rightImages[0].defaultSrc}
                    hoverSrc={rightImages[0].hoverSrc}
                    alt="Right-1"
                    className="mt-20"
                />

                {/* Segunda imagen derecha - Posicionada más arriba */}
                <ImageBar
                    defaultSrc={rightImages[1].defaultSrc}
                    hoverSrc={rightImages[1].hoverSrc}
                    alt="Right-2"
                    className="mt-0"
                />
            </div>

            {/* Carousel de marcas - Iconos más grandes y visibles */}
            <div className="w-full overflow-hidden relative h-24 mt-16 mb-8">
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
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
