// Lógica de negocio (opcional)

import { db } from "../../db.js";

/**
 * Obtener todos los coches ordenados por fecha de creación (últimos primero)
 */
export const getCoches = async (req, res) => {
    try {

        const { marca, oferta, clasificar } = req.query; // obtenemos query params

        // Base de la query
        let query = "SELECT * FROM coches WHERE 1=1";
        let params = [];

        // Filtro por marca
        if(marca) {
            query += " AND LOWER(marca) = LOWER(?)";
            params.push(marca.trim());
        }

        // Filtro por oferta
        if(oferta === "true"){
            query += " AND oferta = 1";
        }

        // Orden precio
        if(clasificar === "precio_asc"){
            query += " ORDER BY precio ASC";
        } else if (clasificar === "precio_desc"){
            query += " ORDER BY precio DESC";
        } else {
            query += " ORDER BY created_at DESC";
        }

        // DEBUG
        console.log("QUERY: ", query);
        console.log("PARAMS: ", params);
        console.log("OFERTA recibida: ", oferta);
        console.log("CLASIFICAR:", clasificar);

        const [rows] = await db.query(query, params);

        // Parseamos imágenes. Transformar imágenes antes de enviar al frontend
        const coches = rows.map(coche => ({...coche, imagenes: JSON.parse(coche.imagenes)}));
        res.json(coches); // Devolvemos los datos como json
    } catch (error) {
        console.error("ERROR REAL:", error);
        res.status(500).json({error: error.message});
    }
};

/**
 * Obtener un coche por su ID
 */
export const getCocheById = async (req, res) => {
    const {id} = req.params;
    try {
        const [rows] = await db.query("SELECT * FROM coches WHERE id = ?", [id]);
        if(rows.length === 0){
            return res.status(404).json({message: "Coche no encontrado"});
        }
        res.json(rows[0]);
    } catch (error) {
        console.error("Error al obtener coche:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}