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

    // Leemos si existe el filtro oferta en la URL
    const oferta = searchParams.get("oferta") === "true";

    // Cargar datos al montar
    useEffect(() => {

        console.log("Cargando coches...")

        const cargarCoches = async () => {
            const data =  await getCoches(marca, oferta);
            console.log("Datos: ", data);
            setCoches(data);
        };

        cargarCoches();
    }, [marca, oferta]); // Se ejecuata cuanmdo cambia la marca o clicamos en oferta

    return (
        <div>
            <div className="cont-sup">
                <div className="cont-txt">
                    <h1>Listado de coches</h1>
                    <h2>Destacados:</h2>
                    <p>Total coches: {coches.length}</p> {/* DEBUG */}
                </div>
                <div className="cont-search">

                    <label htmlFor="" className="me-5">
                        <span className="me-2">Solo ofertas</span>
                        <input 
                        type="checkbox" 
                        checked={oferta}
                        onChange={(e) => {
                            // Clonamos los params actuales - IMPORTANTE
                            const newParams = new URLSearchParams(searchParams);

                            if (e.target.checked){
                                newParams.set("oferta", "true"); // Añadimos
                            } else {
                                newParams.delete("oferta"); // Eliminamos
                            }
                            setSearchParams(newParams);
                        }}
                        />
                    </label>

                    <span className="me-2">Filtrar por marca:</span>
                    <select value={marca} name="marca" id="marca" 
                        onChange={(e) => {
                            const value = e.target.value;

                            // Clonamos los parametros actuales para no perder lo que tenemos
                            const newParams = new URLSearchParams(searchParams);

                            if(value){
                                newParams.set("marca", value); // Añadimos o modificamos marca
                            } else {
                                newParams.delete("marca"); // Quitamos marca
                            }

                            setSearchParams(newParams); // Mantenemos oferta intacto, tal como la tenga el usuario
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