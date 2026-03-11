/**
 * database.js
 * ----------------------------
 * Configura la conexión a PostgreSQL usando Sequelize.
 * Usa variables de entorno para proteger credenciales.
 */

require('dotenv').config();
const { Sequelize } = require('sequelize');

// Crear instancia Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false // evita logs SQL en consola
  }
);

// Función para probar conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a PostgreSQL correctamente.");
  } catch (error) {
    console.error("❌ Error conectando a PostgreSQL:", error);
  }
}

module.exports = { sequelize, testConnection };