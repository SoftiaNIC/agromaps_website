import { Routes, Route, Navigate } from "react-router-dom";
import Web1 from "./pages/web1";
import Web2 from "./pages/web2";

export default function App() {
  return (
    <Routes>
      {/* Redirigir raíz a Web1 */}
      <Route index element={<Navigate to="/web1" replace />} />
      <Route path="/web1" element={<Web1 />} />
      <Route path="/web2" element={<Web2 />} />

      {/* Página 404 */}
      <Route path="*" element={<h1 className="p-6">Página no encontrada</h1>} />
    </Routes>
  );
}

