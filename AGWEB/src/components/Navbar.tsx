import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <h1 className="text-xl font-bold">MiSitio</h1>
            <div className="flex gap-4">
                <Link to="/web1" className="hover:text-blue-600">Web 1</Link>
                <Link to="/web2" className="hover:text-blue-600">Web 2</Link>
            </div>
        </nav>
    );
}
