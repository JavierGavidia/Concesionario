// Archivo con las rutas de la API
import express from "express";

import { getCoches, getCocheById } from "../controllers/cochesController.js";

const router = express.Router();

// GET /api/coches → todos los coches
router.get("/", getCoches);

// GET /api/coches/:id → coche por ID
router.get("/:id", getCocheById);

export default router;
