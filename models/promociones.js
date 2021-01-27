const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promociones', {
    id_promocion: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    porcentaje: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_seleccion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_afiliado: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });
};
