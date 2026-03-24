// Servidor Express principal
import express from "express";
import cors from "cors";
import cochesRoutes from "./src/routes/cochesRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Servir imágenes si las guardamso en server/public/images
app.use("/images", express.static("public/images"));

// Ruta coches
app.use("/api/coches", cochesRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API del concesionario funcionando!");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});