// Componente reutilizable para mostrar el precio de un coche
// Se encarga de:
// - Calcular descuento
// - Mostrar precio normal o en oferta
// - Mostrar icono si tenemos oferta

function Price({ coche }) {
    // Calcular el precio con descuento
    const calcularPrecioOferta = (precio, percent) => {
        return precio - (precio * percent) / 100;
    };

    return (

        <div className="price">
            {/* Si tenemos oferta */}
            {coche.oferta ? (
                <>
                    {/* Precio original tachado */}
                    <span className="old-price">
                        {(coche.precio).toLocaleString("es-ES", {style:"currency", currency:"EUR"})}
                    </span>

                    {/* Precio con descuento */}
                    <span className="new-price">
                        {calcularPrecioOferta(coche.precio, coche.percent).toLocaleString("es-ES", {style:"currency", currency:"EUR"})}
                    </span>

                    {/* Descuento */}
                    <span className="discount">
                        -{coche.percent}%
                    </span>
                </>
            ) : (
                // Si no tenemos oferta
                <>
                    <span className="normal-price">
                        {(coche.precio).toLocaleString("es-ES", {style:"currency", currency:"EUR"})}
                    </span>
                </>
            )}
        </div>

    );
}

export default Price;