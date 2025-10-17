import { motion } from "framer-motion";
import { useState } from "react";

// Interfaz para los miembros del equipo con campos opcionales
interface TeamMember {
    name: string;
    role: string;
    img: string; // Soporta: .svg, .png, .jpg, .jpeg, .webp
    linkedin?: string;
    github?: string;
    instagram?: string;
    cv: string;
    whatsapp: string;
}

const team: TeamMember[] = [
    {
        name: "Geovanny Sandino",
        role: "Ingeniero de Sistemas",
        img: "/images/Team/gio.svg",
        linkedin: "https://www.linkedin.com/in/geovanny-daniel-sandino-137691273/",
        github: "https://github.com/GioX-16",
        cv: "https://drive.google.com/file/d/1Y2UJLk_8FMRIypF-gtLFCDbVqXgA6pda/view?usp=sharing",
        whatsapp: "+505 8514 2553"
    },
    {
        name: "Sofia Barrios",
        role: "Diseñadora",
        img: "/images/Team/sof.svg",
        linkedin: "https://www.linkedin.com/in/sofia-barrios-570194342/",
        instagram: "https://www.instagram.com/sofia_barrios_18/",
        cv: "https://drive.google.com/file/d/example2/view",
        whatsapp: "+505 7879 6439"
    },
    {
        name: "Wilhelm Reyes",
        role: "Ingeniero de Sistemas",
        img: "/images/Team/wil.svg",
        linkedin: "https://www.linkedin.com/in/wilhelm-antonio-reyes-romero-b28993149/",
        github: "https://github.com/WilhelmPro007",
        cv: "https://drive.google.com/file/d/example3/view",
        whatsapp: "+505 5854 8759"
    },
    {
        name: "Kenneth Teller",
        role: "Ingeniero de Sistemas",
        img: "/images/Team/ken.svg",
        linkedin: "https://www.linkedin.com/in/kenneth-teller-78686819a/",
        github: "https://github.com/KennethT2014",
        cv: "https://drive.google.com/file/d/example4/view",
        whatsapp: "+505 +505 8939 6446"
    },
    {
        name: "Anielka Lezama",
        role: "Ingeniería Agrícola",
        img: "/images/Team/ani.svg",
        linkedin: "https://www.linkedin.com/in/anielka-lezama-948292349/",
        instagram: "https://www.instagram.com/anielka_leza17/",
        cv: "https://drive.google.com/file/d/example5/view",
        whatsapp: "+505 8915 4247"
    },
    {
        name: "Carlos Fajardo",
        role: "Ingeniero de Sistemas",
        img: "/images/Team/carlosFajardo.jpeg",
        linkedin: "https://www.linkedin.com/in/carlos-francisco-fajardo-lamelas-32755538a/",
        instagram: "https://www.instagram.com/carlosfajardo._/",
        cv: "https://drive.google.com/file/d/example7/view",
        whatsapp: "+505 8684 1960"
    }
    // ,
    // {
    //     name: "Agustin Amaya",
    //     role: "Ingeniero de Sistemas",
    //     img: "/images/Team/Agu.svg",
    //     linkedin: "https://www.linkedin.com/in/agust%C3%ADn-amaya-b3b110244/",
    //     github: "https://github.com/bluehat8",
    //     cv: "https://drive.google.com/file/d/example6/view",
    //     whatsapp: "+505 +505 8228 2296"
    // }
];

// Componente para imagen de perfil con fallback
interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProfileImage = ({ src, alt, className = "" }: ProfileImageProps) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    const handleLoad = () => {
        setImageLoaded(true);
    };

    // Avatar por defecto si falla la imagen
    const defaultAvatar = (
        <img
            src="/images/Team/default-avatar.svg"
            alt={`Avatar por defecto para ${alt}`}
            className="w-full h-full object-cover"
        />
    );

    return (
        <div className={`relative ${className}`}>
            {!imageError ? (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onError={handleError}
                    onLoad={handleLoad}
                />
            ) : (
                defaultAvatar
            )}
            {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
            )}
        </div>
    );
};

export default function Equipo() {
    return (
        <section id="equipo" className="relative min-h-screen py-16 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/Team/bg_team.png')`
                }}
            />
            
            {/* Overlay verde para el background */}
            <div className="absolute inset-0 bg-green-900/40"></div>
            
            {/* Contenido */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        EQUIPO AGROMAPS
                    </h2>
                </div>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-gradient-to-b from-white  to-[#2E8B57] rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-xs mx-auto w-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: `linear-gradient(to bottom, #FFFFFF 0%, #96C5AB 50%, #62A881 75%, #48996C 88%, #2E8B57 100%)`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#01312D';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(to bottom, #FFFFFF 0%, #96C5AB 50%, #62A881 75%, #48996C 88%, #2E8B57 100%)';
                            }}
                        >
                            {/* Imagen del perfil */}
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 overflow-hidden rounded-full border-3 border-white shadow-md">
                                <ProfileImage
                                    src={member.img}
                                    alt={`Foto de perfil de ${member.name}`}
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Nombre y rol */}
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-white transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-700 mb-3 group-hover:text-white transition-colors">
                                {member.role}
                            </p>

                            {/* Iconos de redes sociales - Dinámicos */}
                            <div className="flex justify-center space-x-2 sm:space-x-3 mb-3">
                                {/* LinkedIn - Solo si existe */}
                                {member.linkedin && (
                                    <a 
                                        href={member.linkedin} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                        title="LinkedIn"
                                    >
                                        <span className="text-white font-bold text-xs">in</span>
                                    </a>
                                )}
                                
                                {/* GitHub - Solo si existe */}
                                {member.github && (
                                    <a 
                                        href={member.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                                        title="GitHub"
                                    >
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                )}
                                
                                {/* Instagram - Solo si existe */}
                                {member.instagram && (
                                    <a 
                                        href={member.instagram} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                                        title="Instagram"
                                    >
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1">
                                <a 
                                    href={member.cv}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:flex-1 bg-[#1C5937] text-white py-1.5 px-2 sm:px-3 rounded-lg font-medium hover:bg-white hover:text-[#1C5937] transition-colors text-xs sm:text-sm text-center"
                                >
                                    Hoja Vida
                                </a>
                                <a 
                                    href={`https://wa.me/${member.whatsapp.replace(/\s/g, '')}?text=Hola ${member.name}, me gustaría contactarte sobre un proyecto.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:flex-1 bg-black text-white py-1.5 px-2 sm:px-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors text-xs sm:text-sm text-center"
                                >
                                    Contactar
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
