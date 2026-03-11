/**
 * models/Producto.js
 * --------------------------------
 * Define el modelo Producto.
 * Cada modelo representa una tabla.
 */

const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

// Definir modelo
const Producto = sequelize.define('Producto', {
  
  // ID automático
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // Nombre del producto
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Precio del producto
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

}, {
  tableName: 'productos', // nombre tabla en DB
  timestamps: false // evita createdAt y updatedAt
});

module.exports = Producto;