import { useEffect, useState } from "react";
import { getCoches } from "../../sevices/cochesService";
import CocheCard from "../../components/coches/CocheCard";

import { useSearchParams } from "react-router-dom";



// Página completa de Listado de coches
function CochesPage() {
    // Estado para almacenar coches
    const [coches, setCoches] = useState([]);

    //const [marca, setMarca] = useState(""); // Estado del filtro no guarda el historial ya que rompe la URL

    const [searchParams, setSearchParams] = useSearchParams(); // Leer query params en React

    const marca = searchParams.get("marca") || "";

    // Cargar datos al montar
    useEffect(() => {

        console.log("Cargando coches...")

        const cargarCoches = async () => {
            const data =  await getCoches(marca);
            console.log("Datos: ", data);
            setCoches(data);
        };

        cargarCoches();
    }, [marca]); // Se ejecuata cuanmdo cambia la marca

    return (
        <div>
            <div className="cont-sup">
                <div className="cont-txt">
                    <h1>Listado de coches</h1>
                    <h2>Destacados:</h2>
                    <p>Total coches: {coches.length}</p> {/* DEBUG */}
                </div>
                <div className="cont-search">
                    <span className="me-2">Filtrar por marca:</span>
                    <select value={marca} name="marca" id="marca" onChange={(e) => {
                        const value = e.target.value;

                        if(value){
                            setSearchParams({marca: value}); // Actualiza la URL
                        } else {
                            setSearchParams({}); // Sin filtros
                        }
                    }}>
                        <option value="">Todas</option>
                        <option value="BMW">BMW</option>
                        <option value="Audi">Audi</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Ford">Ford</option>
                        <option value="Renault">Renault</option>
                    </select>
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