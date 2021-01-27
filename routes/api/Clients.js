const router = require('express').Router();
const bcrypt = require('bcrypt');

const { Us } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
/*
router.get('/:userId', async (req,res) => {
    const users = await User.findAll({
        where: {
          id_cliente: req.params.userId
        }
    });
    res.json(users);
});*/

router.get('/', async (req,res) => {
   const users = await Us.findAll({
    });
    res.json(users);
});
/*
router.put('/:userId', async (req,res) => {
    await User.update(req.body,{
        where: { id_cliente: req.params.userId }
    });
    res.json({ success: 'Se ha modificado el usuario' });
});

router.delete('/:userId', async (req,res) => {
    await User.destroy({
        where: { id_cliente: req.params.userId }
    });
    res.json({ success: 'Se ha borrado el usuario' });
});

router.post('/login', async (req,res) => {
    const user = await User.findOne({ where: { mail: req.body.mail } });
    if(user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales){
         res.json({ success: createToken(user) }); 
        }else{
         res.json({ error: 'Error usuario y/o contraseña' });    
        }
    } else{
        res.json({ error: 'Error usuario y/o contraseña' });   
    }
});

const createToken = (user) => {
    const payload = {
      usuarioId: user.id_cliente,
      createdAt: moment().unix(),
      expiredAt: moment().add(1440, 'minutes').unix()
    }
    return jwt.encode(payload, 'IVP^cP73qRi8');
}*/

/*router.post('/login', async (req,res) => {
    const user = await Us.findOne({ where: { email: req.body.email } });
    if(user){
        const iguales = bcrypt.compareSync(req.body.contrasena, user.contrasena);
        if(iguales){
         res.json({ success: 'Simon' }); 
        }else{
         res.json({ error: 'Error usuario y/o contraseña' });    
        }
    } else{
        res.json({ error: 'Error usuario y/o contraseña' });   
    }
    res.json({ user });
});
*/
router.get('/:userId', async (req,res) => {
    const users = await Us.findAll({
        where: {
          id_user: req.params.userId
        }
    });
    res.json(users);
});

router.put('/:userId', async (req,res) => {
    await Us.update(req.body,{
        where: { id_user: req.params.userId }
    });
    res.json({ success: 'Se han modificado los datos' });
});


router.post('/registro', async (req, res, next) =>{  
    try{
    let body = req.body;
    let pass = bcrypt.hashSync(body.contrasena, 10);
    body.contrasena = pass;
 
    const user  = await Us.create(body);
    res.json(user);
    }catch(err){
        next(err);
    }
});

router.post('/login/:correo', async (req,res,next) =>{
    try{
    const users = await Us.findAll({
            where: {
              email: req.params.correo
            }
        });
        
        
        let pass = req.body.contrasena;
        let pass2 = users[0].contrasena;
    bcrypt.compare(pass, pass2, function(err, isMatch) {
    if (err) {
      console.log(err);
    }
    if (isMatch) {
      //console.log("passwords didn't match");
      console.log(pass);
      console.log(pass2);
      users[0].email = "coincidieron"
      res.json(users);
    }else{
        users[0].email="";
    res.json(users);
    }
    
  });
    }catch(err){
        next(err);
    }
    
    
    
    
    
});






module.exports = router;