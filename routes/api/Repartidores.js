const { Rep  } = require('../../db');
const router = require('express').Router();
const { check, validationResult } = require('express-validator');


//TODOS
router.get('/', async (req,res) => {
    const users = await Rep.findAll();
    res.json(users);
});

router.get('/afiliado/:userId', async (req,res) => {
    const users = await Rep.findAll({
        where: {
          id_afiliado: req.params.userId
        }
    });
    res.json(users);
});
router.get('/repartidor/:userId', async (req,res) => {
    const users = await Rep.findAll({
        where: {
          id_repartidor: req.params.userId
        }
    });
    res.json(users);
});

router.get('/perrycox', async (req,res) => {
    const users = await Rep.findAll({
        where: {
          id_perrycox: "1"
        }
    });
    res.json(users);
});



//CREAR
router.post('/', async (req,res) => {
    const afilia = await Rep.create(req.body);
    res.json(afilia);
});

//BORRAR
router.post('/delete/:Idafili', async (req,res) => {
    await Rep.destroy({
    where: {
        id_repartidor:req.params.Idafili
    }
})
    res.json({ success: 'Se ha eliminado al Afiliado' });
});


//EDITAR
router.put('/:userId', async (req,res) => {
    await Rep.update(req.body,{
        where: { id_repartidor: req.params.userId }
    });
});





router.post('/login/:usuario', async (req,res,next) =>{
    
    const users = await Rep.findAll({
            where: {
              usuario: req.params.usuario
            }
        });
        
        
        
    res.json(users);
    
    
});









module.exports = router;