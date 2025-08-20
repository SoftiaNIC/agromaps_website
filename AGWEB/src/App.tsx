import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="p-6">
      {/* Menú de navegación */}
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<h1 className="text-2xl">Página Home</h1>} />
        <Route path="/about" element={<h1 className="text-2xl">Página About</h1>} />
        <Route path="/contact" element={<h1 className="text-2xl">Página Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
