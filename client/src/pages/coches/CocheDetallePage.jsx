import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoches } from "../../sevices/cochesService";

import Price from "../../components/ui/Price";

function CocheDetallePage() {
    const { id } = useParams(); // Obtenemos el id de la URL
    const [coche, setCoche] = useState(null);

    // Estado para la imágen principal
    const [imagenPrincipal, setImagenPrincipal] = useState("");



    useEffect(() => {
        const cargarCoche = async () => {
            const coches = await getCoches();

            // Buscar el coche por la ID
            const cocheEncontrado = coches.find(
                (c) => c.id === Number(id)
            );

            setCoche(cocheEncontrado);

            // Inicializamos la imagen principal como la primera
            if (cocheEncontrado && cocheEncontrado.imagenes.length > 0) {
                setImagenPrincipal(cocheEncontrado.imagenes[0]);
            }
        };

        cargarCoche();

    }, [id]);

    if (!coche) return <p>Cargando coche...</p>

    // Filtramos la imagen principal para que no aparezca en el carousel
    const miniaturas = coche.imagenes.filter(img => img !== imagenPrincipal);

    return (
        <div className="coche-detalle">

            <div className="coche-detalle__img">
                {/* Imagen principal */}
                <div className="imagen-principal">
                    {/* Icono si hay oferta */}
                    {coche.oferta && (
                        <i className="fa-solid fa-star estrella-icon"></i>
                    )}

                    <img src={imagenPrincipal} alt={`Imagen del ${coche.marca} ${coche.modelo}`} />
                </div>

                {/* Carrousel de miniaturas */}
                <div className="carousel-miniaturas">
                    {miniaturas.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Imagen ${coche.marca} ${coche.modelo} ${index + 1}`}
                            className="miniatura"
                            onClick={() => setImagenPrincipal(img)} // Al clicar la onemos como principal
                        />
                    ))}
                </div>
            </div>

            <div className="coche-detalle__info">
                <h1>{coche.marca} {coche.modelo}</h1>

                <Price coche={coche}></Price>

                <div className="detalle-extra">
                    <p>Matrícula: <strong>{coche.matricula}</strong></p>
                    <p>Cilindrada: <strong>{coche.cilindrada}</strong></p>
                    <p>Potencia: <strong>{coche.potencia}</strong></p>
                    <p>Kilometros: <strong>{coche.km}</strong></p>
                </div>

                <button className="btn btn-primary mt-auto">
                    Contactar
                </button>
            </div>



        </div>
    );
}

export default CocheDetallePage;