const router = require('express').Router();


const apiClientsRouter = require('./api/Clients');
const apiCategoriesRouter = require('./api/Categories');
const apiSubcategoriesRouter = require('./api/Subcategories');
const apiOrdersRouter = require('./api/Orders');
const apiPromocionesRouter = require('./api/Promociones');
const apiCartasRouter = require('./api/Cartas');
const apiCarrouselRouter = require('./api/Carrousel');
const apiAfilRouter = require('./api/Afiliados');
const apiRepaRouter = require('./api/Repartidores');
const apiAdmRouter = require('./api/Admin');

//const apiRepRouter = require('./api/Repartidores');


router.use('/repartidores', apiRepaRouter);
router.use('/users', apiClientsRouter);
router.use('/categories', apiCategoriesRouter);
router.use('/subcategories', apiSubcategoriesRouter);
router.use('/orders', apiOrdersRouter);
router.use('/promociones', apiPromocionesRouter);
router.use('/cartas', apiCartasRouter);
router.use('/afiliados', apiAfilRouter);
router.use('/carrousel', apiCarrouselRouter);
router.use('/admin', apiAdmRouter);

//router.use('/repartidores', apiRepaRouter);





module.exports = router;