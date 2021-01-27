const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Conductores', {
    id_conductor: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    father_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
    ,
    mother_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cellular: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });




}