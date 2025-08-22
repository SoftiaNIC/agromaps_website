import { Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
    siteName?: string;
    logo?: React.ReactNode;
}

export default function Footer({ siteName = "Agromaps", logo }: FooterProps) {
    return (
        <footer className="bg-green-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">

                    {/* Columna del Logo y Descripción */}
                    <div className="col-span-1 lg:col-span-2">
                        {logo ? (
                            <div className="mb-4">{logo}</div>
                        ) : (
                            <img
                                src="/public/icons/lgo_footer.svg" 
                                alt="Agromaps Logo"
                                className="w-48 mb-4"
                            />
                        )}
                        <p className="text-sm mb-4">
                            Con nuestra App, puedes monitorear y gestionar tus cultivos de manera eficiente, optimizando recursos y maximizando rendimientos.
                        </p>
                    </div>


                    {/* Columnas de Enlaces */}

                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-white uppercase mb-4">Producto</h3>
                            <ul>
                                <li className="mb-2"><a href="/features" className="hover:text-white">Características</a></li>
                                <div className="flex space-x-3">
                                    <img
                                        src="/src/assets/images/Footer/logo_playstore.png" 
                                        alt="Google Play"
                                        className="h-10"
                                    />
                                    <img
                                        src="/src/assets/images/Footer/logo_appstore.png" 
                                        alt="App Store"
                                        className="h-10"
                                    />
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white uppercase mb-4">Compañía</h3>
                            <ul>
                                <li className="mb-2"><a href="/about" className="hover:text-white">Sobre Nosotros</a></li>
                                <li className="mb-2"><a href="/careers" className="hover:text-white">Carreras</a></li>
                                <li className="mb-2"><a href="/contact" className="hover:text-white">Contacto</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white uppercase mb-4">Legal</h3>
                            <ul>
                                <li className="mb-2"><a href="/privacy" className="hover:text-white">Política de Privacidad</a></li>
                                <li className="mb-2"><a href="/terms" className="hover:text-white">Términos de Servicio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Barra inferior */}
                
                <div className="mt-12 pt-8 border-t border-white-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} {siteName}. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
