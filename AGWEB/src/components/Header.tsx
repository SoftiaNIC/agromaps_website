import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const linkColor = "#1C5937";
    const linkHover = "#0140BA";

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo izquierda */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/public/icons/Logo_nv.svg"
                            alt="Agromaps Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* Navs en el centro */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Inicio", id: "hero" },
                        { name: "Aprender", id: "aprender" },
                        { name: "Proyectos", id: "proyectos" },
                        { name: "Agromaps", id: "agromaps" },
                        { name: "Beneficios", id: "beneficios" },
                    ].map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSection(item.id)}
                            className="font-semibold transition-colors cursor-pointer"
                            style={{ color: linkColor }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = linkHover)
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = linkColor)
                            }
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Redes sociales en escritorio */}
                <div className="hidden md:flex gap-3">
                    <a target="noopener" href="https://x.com/sandinoG1X" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-90">
                        <Twitter size={18} />
                    </a>
                    <a target="noopener" href="https://www.linkedin.com/in/geovanny-daniel-sandino-137691273/" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                        <Linkedin size={18} />
                    </a>
                    <a target="noopener" href="https://www.instagram.com/agromapas_nic/" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                        <Instagram size={18} />
                    </a>
                    <a target="noopener" href="https://www.tiktok.com/@agromapas.nic" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                        <SiTiktok size={18} />
                    </a>
                </div>

                {/* Mobile - Menú hamburguesa */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#1C5937] focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile - Menu desplegable */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="md:hidden flex flex-col items-center gap-8 py-6 bg-white shadow-md"
                >
                    {[
                        { name: "Inicio", id: "hero" },
                        { name: "Aprender", id: "aprender" },
                        { name: "Proyectos", id: "proyectos" },
                        { name: "Agromaps", id: "agromaps" },
                        { name: "Beneficios", id: "beneficios" },
                    ].map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                scrollToSection(item.id);
                                setIsOpen(false);
                            }}
                            className="font-semibold text-lg transition-colors cursor-pointer"
                            style={{ color: linkColor }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = linkHover)
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = linkColor)
                            }
                        >
                            {item.name}
                        </button>
                    ))}

                    {/* Redes sociales en móvil */}
                    <div className="flex gap-3">
                        <a href="#" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="bg-[#1C5937] text-white p-2 rounded-full hover:opacity-80">
                            <SiTiktok size={18} />
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
