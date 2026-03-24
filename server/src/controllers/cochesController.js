// Lógica de negocio (opcional)

import { db } from "../../db.js";

/**
 * Obtener todos los coches ordenados por fecha de creación (últimos primero)
 */
export const getCoches = async (req, res) => {
    try {

        const { marca } = req.query; // obtenemos query params

        console.log("🔥 Marca recibida en backend:", marca); // 👈 DEBUG

        let query = "SELECT * FROM coches";
        let params = [];

        // Si viene marca filtramos
        if(marca) {
            query += " WHERE marca = ?";
            params.push(marca);
        }

        // Siempre ordenamos por fecha
        query += " ORDER BY created_at DESC";

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