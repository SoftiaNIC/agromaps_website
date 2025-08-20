import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    
    const linkColor = "#1C5937"; // verde de texto normal
    const linkHover = "#0140BA"; // verde al hover
    const buttonColor = "#1C5937"; // botón base
    const buttonHover = "#145BE5"; // botón hover

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* PC- Logo izquierda */}
                <div className="hidden md:flex items-center gap-2">
                    <img
                        src="/public/icons/Logo_nv.svg" 
                        alt="Agromaps Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* PC - Navs en el centro */}
                <div className="hidden md:flex items-center gap-8">
                    {["Inicio", "Nosotros", "Team", "Agromaps", /* "Aprender" */].map((item, idx) => (
                        <Link
                            key={idx}
                            to={`/${item.toLowerCase()}`}
                            className="font-semibold transition-colors"
                            style={{ color: linkColor }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = linkHover)
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = linkColor)
                            }
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* PC - Botón derecha */}
                <div className="hidden md:flex">
                    <Link
                        to="/contacto"
                        className="px-4 py-2 rounded-xl font-semibold text-white transition-colors"
                        style={{ backgroundColor: buttonColor }}
                        onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.backgroundColor = buttonHover)
                        }
                        onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.backgroundColor = buttonColor)
                        }
                    >
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile - Menú hamburguesa */}
                <div className="flex md:hidden w-full justify-between items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#1C5937] focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <img
                        src="/public/icons/LogoSV.svg"
                        alt="Agromaps Logo"
                        className="h-10 w-auto"
                    />
                </div>
            </div>

            {/* Mobile - Menu desplegable */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-8 py-6 bg-white shadow-md">
                    {["Inicio", "Nosotros", "Team", "Agromaps"].map((item, idx) => (
                        <Link
                            key={idx}
                            to={`/${item.toLowerCase()}`}
                            className="font-semibold text-lg transition-colors"
                            style={{ color: linkColor }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = linkHover)
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = linkColor)
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                    <Link
                        to="/contacto"
                        className="px-8 py-2 rounded-xl font-semibold text-white transition-colors"
                        style={{ backgroundColor: buttonColor }}
                        onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.backgroundColor = buttonHover)
                        }
                        onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.backgroundColor = buttonColor)
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Contáctanos
                    </Link>
                </div>
            )}
        </nav>
    );
}

