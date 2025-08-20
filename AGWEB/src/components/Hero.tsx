import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-[60vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        >
            <h2 className="text-4xl font-bold mb-4">Bienvenido a Mi Web</h2>
            <p className="text-lg">Esta es la sección Hero 🚀</p>
        </motion.section>
    );
}
