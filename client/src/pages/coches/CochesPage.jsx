import { useEffect, useState } from "react";
import { getCoches } from "../../sevices/cochesService";
import CocheCard from "../../components/coches/CocheCard";

// Página completa de Listado de coches
function CochesPage() {
    // Estado para almacenar coches
    const [coches, setCoches] = useState([]);

    // Cargar datos al montar
    useEffect(() => {

        console.log("Cargando coches...")

        const cargarCoches = async () => {
            const data =  await getCoches();
            console.log("Datos: ", data);
            setCoches(data);
        };

        cargarCoches();
    }, []);

    return (
        <div>
            <h1>Listado de coches</h1>

            <h2>Destacados:</h2>

            <p>Total coches: {coches.length}</p> {/* DEBUG */}

            <div className="cars">
                {coches.map((coche) => {
                    return <CocheCard key={coche.id} coche={coche} />
                })}
            </div>
        </div>
    );
}

export default CochesPage;