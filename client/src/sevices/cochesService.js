// const API_URL = "http://localhost:3001/api/coches";

/**
 * Obtener todos los coches desde el backend con filtro opcional por marca
 */
export const getCoches = async (marca="") => {

    // Construimos la URL dinámicamente
    const url = marca ? `http://localhost:3001/api/coches?marca=${marca}` : `http://localhost:3001/api/coches`;

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