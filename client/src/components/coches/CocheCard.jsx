// Componente reutilizable para mostrar un coche
import { useNavigate } from "react-router-dom";

import Price from "../ui/Price";

function CocheCard({ coche }) {

    // Navegación
    const navigate = useNavigate();

    return (

        <div className="card-car h-100">
            {/* Imagen del coche */}
            <div className="img-container">

                {/* Icono si hay oferta */}
                {coche.oferta && (
                    <i className="fa-solid fa-star estrella-icon"></i>
                )}

                <img className="img-fluid" src={coche.imagenes[0]} alt={`Imagen del ${coche.marca} ${coche.modelo}`} />
            </div>
            
            {/* Marca + modelo */}
            <div className="content-txt">
                <h3>
                    {coche.marca} {coche.modelo}
                </h3>

                {/* Cargamos el precio del coche */}
                <Price coche={coche} />

            </div>

            {/* Botón de ejemplo */}
            <button className="btn btn-primary" onClick={() => navigate(`/coches/${coche.id}`)}>
                Ver detalles
            </button>
        </div>
    );
}

export default CocheCard;