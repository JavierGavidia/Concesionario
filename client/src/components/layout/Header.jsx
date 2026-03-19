// Header del sitio web
// Este componente se reutiliza en todas las páginas

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h2 className="m-0">Concesionario</h2>
                {/* Navegación */}
                <nav className="d-flex gap-3">
                    {/* <a href="/">Inicio</a>
                    <a href="/coches">Coches</a> */}
                    <Link to="/">Inicio</Link>
                    <Link to="/coches">Coches</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;