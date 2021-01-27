const { Sequelize } = require("sequelize");

module.exports = (sequelize, type) => {
    return sequelize.define('Cliente',{
        id_cliente:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        password: type.STRING,
        father_name: type.STRING,
        mother_name: type.STRING,
        mail: type.STRING,
        cellular: type.STRING
    })
}