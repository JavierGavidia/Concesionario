// const API_URL = "http://localhost:3001/api/coches";

/**
 * Obtener todos los coches desde el backend con filtro opcional por marca
 */
export const getCoches = async (marca="", oferta = false) => {

    // Construimos la URL dinámicamente
    let url = "http://localhost:3001/api/coches";

    const params = [];

    // Añadimos marca si existe
    if(marca){
        params.push(`marca=${marca}`);
    }

    // Añadimos oferta si está activada
    if(oferta) {
        params.push(`oferta=true`);
    }

    // Si hay Params los añadimos a la URL
    if(params.length > 0){
        url += `?${params.join("&")}`;
    }

    console.log("🔍 URL que se está llamando:", url);

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error ("Error al obtener coches");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};