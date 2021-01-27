const { Cat } = require('../../db');
const router = require('express').Router();
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/saeshesv/public_html/prueba/categorias')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});

var upload = multer({ storage: storage });

router.get('/', async (req,res) => {
    const categories = await Cat.findAll();
    res.json(categories);
});

router.get('/:userId', async (req,res) => {
    const users = await Cat.findAll({
        where: {
          id_categoria: req.params.userId
        }
    });
    res.json(users);
});



router.get('/afiliado/:idaf', async (req,res) => {
    const users = await Cat.findAll({
        where: {
          id_afiliado: req.params.idaf
        }
    });
    res.json(users);
});





router.post('/', async (req,res) => {
    const user = await Cat.create(req.body);
    res.json(user);
});

router.put('/:userId',upload.single('file'), async (req,res) => {
    await Cat.update(req.body,{
        where: { id_categoria: req.params.userId }
    });
    res.json({ success: 'Se ha modificado el usuario' });
     if(req.file) {
        req.body.portada="/prueba/categorias/"+req.file.filename;
       await Cat.update(req.body,{
        where: { id_categoria: req.params.userId }
    });
    }
    else{
            await Cat.update(req.body,{
        where: { id_categoria: req.params.userId }
    });
    } 
});

router.post('/delete/:userId', async (req,res) => {
    await Cat.destroy({
    where: {
        id_categoria:req.params.userId
    }
})
    res.json({ success: 'Se ha eliminado la cat' });
});


router.post('/registro', function (req, res) {  let body = req.body;
  let {email, contrasena} = body;  let usuario = new Usuario({
    email,
    contrasena: bcrypt.hashSync(password, 10),

  });
  
});
router.post('/img', upload.single('file'), async(req, res) => {
       if(req.file) {
        req.body.portada="/prueba/categorias/"+req.file.filename;
        const afilia = await Cat.create(req.body);
        res.json(afilia);
    }
    else throw 'error';
});





module.exports = router;