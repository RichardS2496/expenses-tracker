import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="w-full flex flex-col p-4">
      <Link className="w-full">Inicio</Link>
      <Link className="w-full">Transacciones</Link>
      <Link className="w-full">Items</Link>
      <Link className="w-full">Configuración</Link>
    </div>
  );
}
