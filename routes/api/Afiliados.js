const { Afil } = require('../../db');
const router = require('express').Router();
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/saeshesv/public_html/prueba/afiliados')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});

var upload = multer({ storage: storage });

router.get('/', async (req,res) => {
   const users = await Afil.findAll({
    });
    res.json(users);
});
router.get('/afiliado/:idaf', async (req,res) => {
   const users = await Afil.findAll({
       where : {
           id_afiliado: req.params.idaf
       }
    });
    res.json(users);
});


router.post('/login/:usuario', async (req,res,next) =>{
    
    const users = await Afil.findAll({
            where: {
              usuario: req.params.usuario
            }
        });
        
        
        
    res.json(users);
    
    
});











router.put('/:userId',upload.single('file'), async (req,res) => {
    await Afil.update(req.body,{
        where: { id_afiliado: req.params.userId }
    });
    res.json({ success: 'Se ha modificado el usuario' });
     if(req.file) {
        req.body.logo="/prueba/afiliados/"+req.file.filename;
       await Afil.update(req.body,{
        where: { id_afiliado: req.params.userId }
    });
    }
    else{
            await Afil.update(req.body,{
        where: { id_afiliado: req.params.userId }
    });
    } 
});






router.post('/delete/:Idafili', async (req,res) => {
    await Afil.destroy({
    where: {
        id_afiliado:req.params.Idafili
    }
})
    res.json({ success: 'Se ha eliminado al Afiliado' });
});


router.post('/img', upload.single('file'), async(req, res) => {
       if(req.file) {
        req.body.logo="/prueba/afiliados/"+req.file.filename;
        const afilia = await Afil.create(req.body);
        res.json(afilia);
    }
    else throw 'error';
});


router.post('/', async (req,res) => {
    const afilia = await Afil.create(req.body);
    res.json(afilia);
});
module.exports = router;