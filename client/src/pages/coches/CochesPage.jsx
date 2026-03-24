import { useEffect, useState } from "react";
import { getCoches } from "../../sevices/cochesService";
import CocheCard from "../../components/coches/CocheCard";

// Página completa de Listado de coches
function CochesPage() {
    // Estado para almacenar coches
    const [coches, setCoches] = useState([]);

    const [marca, setMarca] = useState(""); // Estado del filtro

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
                    <select name="marca" id="marca" onChange={(e) => setMarca(e.target.value)}>
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