const { Sequelize } = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    id_pedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    productos: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lat_destino: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    long_destino: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lat_repartidor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    long_repartido: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    long_restaurante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lat_restaurante: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
    metodo_pago: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    codigo_qr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    validado_qr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tipo_entrega: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
    envio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    
    subtotal: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_afiliado: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
     id_repartidor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    administrador: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });
};
