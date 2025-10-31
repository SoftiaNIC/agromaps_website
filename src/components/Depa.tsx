// src/components/Departamentos.tsx
import { motion } from "framer-motion";
import React from "react";
const Depa_bg = "/images/Depa/Depa_bg.png";
const MatagalpSvg = "/images/Depa/Matagalp.svg";
const EstelSvg = "/images/Depa/Estel.svg";
const ChinandSvg = "/images/Depa/Chinand.svg";
const JinoteSvg = "/images/Depa/Jinote.svg";
const UbijinotSvg = "/images/Depa/ubijinot.svg";
const UbimatSvg = "/images/Depa/ubimat.svg";
const UbiesteSvg = "/images/Depa/ubieste.svg";
const UbichiinSvg = "/images/Depa/ubichiin.svg";

interface CardProps {
    title: string;
    description: string;
    time: string;
    coords: string;
    location: string;
    imgBase: string;
    imgHover: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    time,
    coords,
    location,
    imgBase,
    imgHover,
}) => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer group"
            whileHover={{ 
                scale: 1.02,
                backgroundColor: "#1C5937"
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {/* Imagen con efecto hover */}
            <div className="relative w-full h-48 overflow-hidden">
                <img
                    src={imgBase}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                    src={imgHover}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
            </div>

            {/* Contenido */}
            <div className="p-4 group-hover:text-white transition-colors duration-500">
                <p className="text-sm text-green-700 font-medium group-hover:text-green-200 flex items-center justify-center gap-2">
                    <svg 
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                    {location}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white">{title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-200">{description}</p>
                <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-300">{time}</p>
                <p className="text-sm font-mono text-gray-700 group-hover:text-gray-300">{coords}</p>
            </div>
        </motion.div>
    );
};

const Departamentos: React.FC = () => {
    return (
        <section
            id="Dep" className="relative py-16 px-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${Depa_bg})` }}
        >
            {/* Overlay semitransparente para legibilidad */}
            <div className="absolute inset-0 bg-white/70"></div>

            <div className="relative max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-[Poppins] text-gray-900">
                    Departamentos
                </h2>
                <p className="text-gray-700 mt-2 font-[Poppins]">
                    En estos departamentos presentados son los distintos lugares donde se cultiva y se trabaja la siembra y suelos.
                </p>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a 
                        href={`https://www.google.com/maps/place/Matagalpa/@12.9296519,-85.960477,7283m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f724830f9561d2f:0x1793a46db7ccdb99!8m2!3d12.9290069!4d-85.9151211!16zL20vMDZ4Z3dj!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Card
                            title="Cultivos de productos de Café y Cacao."
                            description=""
                            time="2 h 48 min (131.4 km)"
                            coords="12.92795, -85.91906"
                            location="Matagalpa - Nicaragua"
                            imgBase={MatagalpSvg}
                            imgHover={UbimatSvg}
                        />
                    </a>
                    <a 
                        href={`https://www.google.com/maps/place/Estel%C3%AD/@13.0897666,-86.3813784,7279m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f718c42c00bc1ad:0x90de1ab352954a6f!8m2!3d13.0851139!4d-86.3630197!16zL20vMDNfMjRi!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Card
                            title="Cultivo granos básicos maíz, frijol y sorgo."
                            description=""
                            time="3 h 8 min (148.7 km)"
                            coords="13.09185, -86.35384"
                            location="Estelí - Nicaragua"
                            imgBase={EstelSvg}
                            imgHover={UbiesteSvg}
                        />
                    </a>
                    <a 
                        href={`https://www.google.com/maps/place/Chinandega/@12.6238477,-87.1987512,14585m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f70f1ec32d7ec3f:0x53e0a1538f9602ec!8m2!3d12.6234721!4d-87.1273253!16zL20vMDc4dDB2!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Card
                            title="Cultivo Principal Caña de azúcar y granos básicos."
                            description=""
                            time="2 h 48 min (134.5 km)"
                            coords="12.62951, -87.13133"
                            location="Chinandega - Nicaragua"
                            imgBase={ChinandSvg}
                            imgHover={UbichiinSvg}
                        />
                    </a>
                    <a 
                        href={`https://www.google.com/maps/place/Jinotega/@13.0898785,-86.0199027,7279m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f723e88cc57ff89:0xb9bb1035556496ca!8m2!3d13.0883907!4d-85.9993997!16zL20vMDM3NnR6!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Card
                            title="Cultivo Principal Café, la chiltoma y el repollo."
                            description=""
                            time="2 h 58 min (142.6 km)"
                            coords="13.09103, -86.00234"
                            location="Jinotega - Nicaragua"
                            imgBase={JinoteSvg}
                            imgHover={UbijinotSvg}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Departamentos;
