const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    id_admin: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    costoxkm: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    costoxenvio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tarifa_dinamica: {
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
    }
    
  });
};