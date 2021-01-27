const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrousel', {
    id_carrousel: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    portada: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_afiliado: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });
};