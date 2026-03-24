import { useSearchParams } from "react-router-dom";

function Filters() {

    // Acceso a la URL
    const [searchParams, setSearchParams] = useSearchParams();

    // Valores actuales (estado real)
    const marca = searchParams.get("marca") || "";
    const oferta = searchParams.get("oferta") === "true";
    const clasificar = searchParams.get("clasificar") || "";

    // Actualizar params helper
    const updateParams = (key, value) => {

        // Clonamos los params actuales - IMPORTANTE
        const newParams = new URLSearchParams(searchParams);

        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }

        setSearchParams(newParams);
    }

    // Toggle orden precio
    const alternarPrecio = () => {

        let newValue = "";

        if (clasificar === "precio_asc") {
            newValue = "precio_desc";
        } else if (clasificar === "precio_desc") {
            newValue = ""; // Quitamos orden
        } else {
            newValue = "precio_asc";
        }

        updateParams("clasificar", newValue); 
    }

    return (
        <div className="filters">
            {/* FILTRO OFERTA */}
            <div className="oferta-filtro">
                <label htmlFor="">
                    <span className="me-2">Solo ofertas</span>
                    <input
                        type="checkbox"
                        checked={oferta}
                        onChange={(e) => {
                            // Clonamos los params actuales - IMPORTANTE
                            const newParams = new URLSearchParams(searchParams);

                            if (e.target.checked) {
                                newParams.set("oferta", "true"); // Añadimos
                            } else {
                                newParams.delete("oferta"); // Eliminamos
                            }
                            setSearchParams(newParams);
                        }}
                    />
                </label>
            </div>
            {/* FILTRO MARCA */}
            <div className="marca-filtro">
                <span className="me-2">Filtrar por marca:</span>
                <select value={marca} name="marca" id="marca"
                    onChange={(e) => {
                        const value = e.target.value;

                        // Clonamos los parametros actuales para no perder lo que tenemos
                        const newParams = new URLSearchParams(searchParams);

                        if (value) {
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
            {/* ORDEN PRECIO */}
            <div className="orden-precio">
                <button onClick={alternarPrecio} className="btn btn-secondary">
                    {clasificar === "precio_asc" && "Precio ↑"}
                    {clasificar === "precio_desc" && "Precio  ↓"}
                    {!clasificar && "Ordenar por precio"}
                </button>
            </div>
        </div>
    )
}

export default Filters;