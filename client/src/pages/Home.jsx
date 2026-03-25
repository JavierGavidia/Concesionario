// Página principal
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return(

        <div className="home-page">
        
            <div className="container py-5">
                <h1>Bienvenido a nuestro concesionario de coches</h1>
                <h4 className="w-50">Entra y veras los <strong>fantásticos modelos</strong> que tenemos disponibles con <strong>precios insuperables</strong></h4>

                <button className="btn btn-primary mt-5" onClick={() => navigate("/coches")}>
                    Acceder
                </button>
            </div>

            

        </div>
    );
}

export default Home;