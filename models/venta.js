const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('venta', {
    id_venta: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    clave_transaccion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    open_pay: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  });
};
