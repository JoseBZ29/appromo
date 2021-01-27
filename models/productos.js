const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    id_producto: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    precio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    portada: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
    id_categoria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_afiliado: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });
};