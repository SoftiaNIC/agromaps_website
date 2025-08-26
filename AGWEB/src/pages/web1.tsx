import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Depa from "../components/Depa";
import Team from "../components/Team";
import Contacto from "../components/Contacto";
import Wedo from "../components/Wedo";



export default function Web1() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Wedo />
            <Video />
            <Depa />
            <Team />
            <Contacto />
            <Footer />
        </>
    );
}
