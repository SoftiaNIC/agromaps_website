import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


export default function Web2() {
    return (
        <>
            <Navbar />
            <Hero />
            <section className="px-6 py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Sección especial de Web 2</h2>
                <p>Aquí agregas contenido diferente al de Web1.</p>
            </section>
        </>
    );
}
