// Conexión a la base de datos MySQL
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // carga las variables del archivo .env a process.env

/* Con dotenv
const db = mysql.createPool({ host: process.env.DB_HOST, user: process.env.DB_USER, ... }) */

export const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "concesionario2026_db",
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10
});

// === PRUEBA DE CONEXIÓN ===
db.query("SELECT 1 + 1 AS resultado")
  .then(([rows]) => console.log("Conexión OK, resultado:", rows))
  .catch(err => console.error("Error de conexión:", err));