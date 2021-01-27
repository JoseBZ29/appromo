const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('afiliados', {
    id_afiliado: {
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
    latitud: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    longitud: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_stripe: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    porcentaje_comision: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    administrador: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    horario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
  });
};