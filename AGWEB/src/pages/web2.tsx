import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";


export default function Web2() {
    // Hacer scroll hacia arriba cuando se monte el componente
    useScrollToTop();

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}
