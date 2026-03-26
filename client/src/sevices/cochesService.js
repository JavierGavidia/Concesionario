/**
 * Obtener todos los coches desde el backend con filtro opcional por marca
 */
export const getCoches = async (marca="", oferta = false, clasificar = "") => {

    // Construimos la URL dinámicamente
    // let url = "http://localhost:3001/api/coches";

    // Usar la variable de entorno de Vite
    const API_URL = import.meta.env.VITE_API_URL;  // <- esto apunta a Render en producción

    let url = `${API_URL}/api/coches`;

    const params = [];

    // Añadimos marca si existe
    if(marca){
        params.push(`marca=${marca}`);
    }

    // Añadimos oferta si está activada
    if(oferta) {
        params.push(`oferta=true`);
    }

    // Si se ordena por precio
    if(clasificar){
        params.push(`clasificar=${clasificar}`);
    }

    // Si hay Params los añadimos a la URL
    if(params.length > 0){
        url += "?" + params.join("&");
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