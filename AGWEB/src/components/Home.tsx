// src/components/Hero.tsx
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [isMobile, setIsMobile] = useState(false);
    const [showVariant, setShowVariant] = useState(true); // Cambiado a true para que sea visible

    // Detectar si es móvil
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Alternar imágenes cada 5s en móvil
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setShowVariant((prev) => !prev);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMobile) {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setPos({ x, y });
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setShowVariant(false); // Ocultar la variante cuando el mouse sale
        }
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setShowVariant(true); // Mostrar la variante cuando el mouse entra
        }
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Imagen base */}
            <img
                src="/images/BGbase.jpg" // 
                alt="Agromaps Base"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Imagen variante */}
            <img
                src="/images/BGVar2.png" // 
                alt="Agromaps Variante"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={
                    isMobile
                        ? {
                            opacity: showVariant ? 1 : 0, // alterna en móvil
                        }
                        : {
                            opacity: showVariant ? 1 : 0, // mostrar/ocultar en desktop
                            WebkitMaskImage: showVariant ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,0,0,1) 100px, rgba(0,0,0,0) 200px)` : 'none',
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskSize: "cover",
                            maskImage: showVariant ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,0,0,1) 100px, rgba(0,0,0,0) 300px)` : 'none',
                            maskRepeat: "no-repeat",
                            maskSize: "cover",
                        }
                }
            />
        </section>
    );
};

export default Hero;
