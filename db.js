const Sequelize = require('sequelize');

const userModel = require('./models/Users');
const catModel = require('./models/categoria');
const cartaModel = require('./models/cartas');
const dirModel = require('./models/direcciones');
const pedidoModel = require('./models/pedidos');
const productoModel = require('./models/productos');
const promocionModel = require('./models/promociones');
const usuarioModel = require('./models/usuarios');
const ventaModel = require('./models/venta');
const carrouselModel = require('./models/carrousel');
const afiliadosModel = require('./models/afiliados');
const repartidoresModel = require('./models/repartidores');
const adminModel = require('./models/admin');

//mysql://b4992b56076f9e:26303fa3@us-cdbr-east-03.cleardb.com/heroku_25b343680f222a8?reconnect=true
const sequelize = new Sequelize("heroku_25b343680f222a8","b4992b56076f9e","26303fa3", {
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql'
});

const User = userModel(sequelize, Sequelize);
const Cat = catModel(sequelize, Sequelize);
const Carta = cartaModel(sequelize, Sequelize);
const Dir =  dirModel(sequelize, Sequelize);
const Ped = pedidoModel(sequelize, Sequelize);
const Prod = productoModel(sequelize, Sequelize);
const Prom = promocionModel(sequelize, Sequelize);
const Us = usuarioModel(sequelize, Sequelize);
const Vent = ventaModel(sequelize, Sequelize);
const Carro = carrouselModel(sequelize, Sequelize);
const Afil = afiliadosModel(sequelize, Sequelize);
const Rep = repartidoresModel(sequelize, Sequelize);
const Adm = adminModel(sequelize, Sequelize);



sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas')
    })
     .catch(function (err) {
      console.log(err);          
    });

module.exports = {
    User,
    Cat,
    Carta, 
    Dir,
    Ped,
    Prod,
    Prom,
    Us,
    Vent,
    Carro,
    Afil,
    Rep,
    Adm
}