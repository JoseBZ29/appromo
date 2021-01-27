const { Prom } = require('../../db');
const router = require('express').Router();

router.get('/', async (req,res) => {
    const categories = await Prom.findAll();
    res.json(categories);
});

module.exports = router;