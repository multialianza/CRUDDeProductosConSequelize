/**
 * app.js
 * ----------------------------------
 * Archivo principal.
 * - Conecta a DB
 * - Sincroniza modelo
 * - Ejecuta CRUD completo
 */

const { sequelize, testConnection } = require('./database');
const Producto = require('./models/producto');

async function main() {
  try {

    // 1️⃣ Probar conexión
    await testConnection();

    // 2️⃣ Sincronizar modelo (crear tabla si no existe)
    await sequelize.sync();
    console.log("📦 Tabla sincronizada.");

    // ============================
    // CRUD
    // ============================

    // 3️⃣ CREATE
    const nuevoProducto = await Producto.create({
      nombre: "Laptop Gamer",
      precio: 1200.50
    });
    console.log("✅ Producto creado:", nuevoProducto.toJSON());

    // 4️⃣ READ - Todos
    const productos = await Producto.findAll();
    console.log("📋 Lista productos:", productos.map(p => p.toJSON()));

    // 5️⃣ READ - Por ID
    const productoID = await Producto.findByPk(1);
    console.log("🔎 Producto ID 1:", productoID?.toJSON());

    // 6️⃣ UPDATE
    await Producto.update(
      { precio: 999.99 },
      { where: { id: 1 } }
    );
    console.log("✏️ Producto actualizado.");

    // 7️⃣ DELETE
    await Producto.destroy({ where: { id: 1 } });
    console.log("🗑️ Producto eliminado.");

  } catch (error) {
    console.error("❌ Error en app:", error);
  } finally {
    await sequelize.close();
  }
}

main();