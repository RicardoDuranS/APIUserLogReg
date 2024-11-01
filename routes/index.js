const express = require("express");
const path = require("path");
const router = express.Router();
const pool = require("../src/config/conexionDB.js");

router.get("/", (req, res) => {
  res.send("¡Hola Mundosssss!");
});

router.post("/insertStudent/:name/:password", async (req, res) => {
  // Extraer los parámetros de la ruta
  const { name, password } = req.params;

  // Verificar que todos los campos estén presentes
  if (!name || !password) {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }

  try {
    const queryText =
      "INSERT INTO public.users (name, password) VALUES ($1, $2)";
    const values = [name, password];

    await pool.query(queryText, values);
    res.status(201).json({ message: "Usuario insertado correctamente" });
  } catch (err) {
    console.error("Error al insertar usuario:", err);
    res.status(500).json({ error: "Error al insertar usuario" });
  }
});

module.exports = router;
