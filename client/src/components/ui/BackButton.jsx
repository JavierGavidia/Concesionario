import { useNavigate } from "react-router-dom";

/* Botón reutilizable para volver atrás en el historial */
function BackButton({ label = "Volver", className="" }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if(window.history.length > 1){
            navigate(-1); // Vuelve a la página anterior si tenemos historial (lo normal)
        } else {
            navigate("/"); // Volvemos a la home
        }
        
    }

    return (
        <button className={`btn btn-secondary ${className}`} onClick={handleBack}>
            <i className="fa-solid fa-chevron-left me-2"></i> {label}
        </button>
    );
}

export default BackButton;