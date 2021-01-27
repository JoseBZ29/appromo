const router = require('express').Router();


const { Adm } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');




router.get('/', async (req,res) => {
    const users = await Adm.findAll();
    res.json(users);
});
router.put('/:userId', async (req,res) => {
    await Adm.update(req.body,{
        where: { id_admin: req.params.userId }
    });
});

router.get('/:userId', async (req,res) => {
    const users = await Adm.findAll({
        where: {
          usuario: req.params.userId
        }
    });
    res.json(users);
});




module.exports = router;