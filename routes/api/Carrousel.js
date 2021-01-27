const { Carro } = require('../../db');
const router = require('express').Router();
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/saeshesv/public_html/prueba/carrousel')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});

var upload = multer({ storage: storage });


router.get('/', async (req,res) => {
    const carrousel = await Carro.findAll();
    res.json(carrousel);
});




router.put('/:userId',upload.single('file'), async (req,res) => {
    await Carro.update(req.body,{
        where: { id_carrousel: req.params.userId }
    });
    res.json({ success: 'Se ha modificado el usuario' });
     if(req.file) {
        req.body.portada="/prueba/carrousel/"+req.file.filename;
       await Carro.update(req.body,{
        where: { id_carrousel: req.params.userId }
    });
    }
    else{
            await Carro.update(req.body,{
        where: { id_carrousel: req.params.userId }
    });
    } 
});


module.exports = router;