// Header del sitio web
// Este componente se reutiliza en todas las páginas

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    return (
        <header className="header border-bottom">
            <div className="container">
                <button className="btn-logo" onClick={() => navigate("/")}>
                    <div className="cont-img">
                        <img src="images/genericas/logo_concesionario.png" alt="logo concesionario" />
                    </div>
                    <h4 className="m-0">Tu Concesionario</h4>
                </button>
                
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