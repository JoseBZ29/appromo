const { Carta } = require('../../db');
const router = require('express').Router();

router.get('/', async (req,res) => {
    const categories = await Carta.findAll();
    res.json(categories);
});

module.exports = router;