const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repartidores', {
    id_repartidor: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_afiliado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_perrycox: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
  });
};