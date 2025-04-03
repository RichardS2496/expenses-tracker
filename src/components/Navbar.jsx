import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full flex flex-col p-4">
      <ul>
        <li>
          <Link to={"/"} className="w-full">
            Inicio
          </Link>
        </li>

        <li>
          <Link to={"/transactions"} className="w-full">
            Transacciones
          </Link>
        </li>
        <li>
          <Link to={""} className="w-full">
            Items
          </Link>
        </li>
        <li>
          <Link to={""} className="w-full">
            Configuración
          </Link>
        </li>
      </ul>
    </nav>
  );
}
