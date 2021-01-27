const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direcciones', {
    id_direccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    calle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    num_int: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    num_ext: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    colonia: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fk_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
};
