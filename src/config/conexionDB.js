const { Pool } = require("pg");

// Configuración del pool de conexiones
const pool = new Pool({
  connectionString:
    "postgresql://RicardoDuran:lFvFkyql1h_94ftvIm2WWg@omega-cilantro-2723.jxf.gcp-us-west2.cockroachlabs.cloud:26257/looknfund?sslmode=verify-full",
});

async function connectDB() {
  try {
    // Prueba de conexión inicial al pool
    const client = await pool.connect();
    console.log("Conectado a la base de datos de PostgreSQL exitosamente.");
    client.release(); // Libera la conexión de prueba

    return pool; // Devuelve el pool en lugar de una sola conexión
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    process.exit(1); // Opcional: Finaliza el proceso si falla la conexión
  }
}

module.exports = pool;
