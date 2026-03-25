import { useEffect, useState } from "react";
import { getCoches } from "../../sevices/cochesService";
import CocheCard from "../../components/coches/CocheCard";

import { useSearchParams } from "react-router-dom";

// Importamos el componente de filtros
import Filters from "../../components/filters/Filters";

// Página completa de Listado de coches
function CochesPage() {
    // Estado para almacenar coches
    const [coches, setCoches] = useState([]);

    const [searchParams] = useSearchParams(); // Leer query params en React

    // Leemos si tiene marca
    const marca = searchParams.get("marca") || "";

    // Leemos si existe el filtro oferta en la URL
    const oferta = searchParams.get("oferta") === "true";

    // Leemos si se ordena por precio
    const clasificar = searchParams.get("clasificar") || "";

    // Cargar datos al montar
    useEffect(() => {

        console.log("Cargando coches...")

        const cargarCoches = async () => {
            const data =  await getCoches(marca, oferta, clasificar);
            console.log("Datos: ", data);
            setCoches(data);
        };

        cargarCoches();
    }, [marca, oferta, clasificar]); // Se ejecuata cuanmdo cambia la marca o clicamos en oferta

    return (
        <div className="container py-5">
            <div className="cont-sup">
                <div className="cont-txt">
                    <h1>Muestrario de coches</h1>
                    <p>Total coches: {coches.length}</p> {/* DEBUG */}
                </div>
                <div className="cont-search">

                    <Filters />

                    
                </div>
            </div>
            

            <div className="cars">
                {coches.map((coche) => {
                    return <CocheCard key={coche.id} coche={coche} />
                })}
            </div>
        </div>
    );
}

export default CochesPage;