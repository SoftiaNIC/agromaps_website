// src/components/Home.tsx
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [isMobile, setIsMobile] = useState(false);
    const [showVariant, setShowVariant] = useState(true);

    // Detectar si es móvil con breakpoints más precisos
    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
        };
        
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Alternar imágenes cada 4s en móvil para mejor experiencia
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setShowVariant((prev) => !prev);
            }, 4000);
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
            setShowVariant(false);
        }
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setShowVariant(true);
        }
    };

    return (
        <section
            id="heros"
            className="relative w-full h-screen overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Fondo mobile: imagen bg_imgmob */}
            {isMobile && (
                <div className="absolute inset-0 z-10">
                    <img
                        src="/images/bg_imgmob.png"
                        alt="Background Mobile"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Imagen base - solo visible en desktop */}
            {!isMobile && (
                <img
                    src="/images/BGbase.jpg"
                    alt="Agromaps Base"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Imagen variante - solo visible en desktop */}
            {!isMobile && (
                <img
                    src="/images/BGVar2.png"
                    alt="Agromaps Variante"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{
                        opacity: showVariant ? 1 : 0,
                        WebkitMaskImage: showVariant ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,0,0,1) 100px, rgba(0,0,0,0) 200px)` : 'none',
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskImage: showVariant ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,0,0,1) 100px, rgba(0,0,0,0) 300px)` : 'none',
                        maskRepeat: "no-repeat",
                        maskSize: "cover",
                    }}
                />
            )}

            {/* Overlay para mejorar legibilidad en mobile */}
            {isMobile && (
                <div className="absolute inset-0 bg-black/20 pointer-events-none z-20"></div>
            )}

            {/* Indicador de cambio de imagen para mobile */}
            {isMobile && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${showVariant ? 'bg-emerald-600' : 'bg-emerald-300'}`}></div>
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${!showVariant ? 'bg-emerald-600' : 'bg-emerald-300'}`}></div>
                </div>
            )}
        </section>
    );
};

export default Home;
