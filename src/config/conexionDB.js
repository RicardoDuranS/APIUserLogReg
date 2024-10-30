const { Client } = require("pg");

const client = new Client(
  "postgresql://RicardoDuran:lFvFkyql1h_94ftvIm2WWg@omega-cilantro-2723.jxf.gcp-us-west2.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
);

async function connectDB() {
  try {
    con = await client.connect();
    console.log("Conectado a la base de datos de PostgreSQL exitosamente.");
    return con;
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    process.exit(1); // Opcional: Finaliza el proceso si falla la conexión
  }
}

module.exports = connectDB;
