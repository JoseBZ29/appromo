const { Prod } = require('../../db');
const router = require('express').Router();
const { Op } = require("sequelize");
const multer = require('multer');
const fs = require("fs");
const fastcsv = require("fast-csv");


//server.js
 
 
// SET STORAGE
var storageExcel = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/saeshesv/public_html/excel')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ '.csv')
  }
})
 
var uploadExcel = multer({ storage: storageExcel })


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/saeshesv/public_html/prueba/productos')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});
var upload = multer({ storage: storage });

router.get('/', async (req,res) => {
    try{
    const users =  await Prod.findAll({limit : 5});
    res.json(users);
    }catch(err){
        
    }
});

router.get('/:userId', async (req,res) => {
    const users = await Prod.findAll({
        where: {
          id_producto: req.params.userId
        }
    });
    res.json(users);
});


router.get('/afiliado/:userId', async (req,res) => {
    const users = await Prod.findAll({
        where: {
          id_afiliado: req.params.userId
        }
    });
    res.json(users);
});



router.get('/id/:userId', async (req,res) => {
    const users = await Prod.findAll({
        where: {
          id_categoria: req.params.userId
        }
    });
    res.json(users);
});

router.get('/nombre/:userName', async (req,res) => {
    const users = await Prod.findAll({
        where: {
            nombre: {
                [Op.like]: '%'+req.params.userName+'%'
            }
        }
    });
    res.json(users);
});

router.post('/', async (req,res) => {
    const user = await Prod.create(req.body);
    res.json(user);
});



router.put('/:userId',upload.single('file'), async (req,res) => {
    await Prod.update(req.body,{
        where: { id_producto: req.params.userId }
    });
    res.json({ success: 'Se ha modificado el usuario' });
     if(req.file) {
        req.body.portada="/prueba/productos/"+req.file.filename;
       await Prod.update(req.body,{
        where: { id_producto: req.params.userId }
    });
    }
    else{
            await Prod.update(req.body,{
        where: { id_producto: req.params.userId }
    });
    } 
});


router.post ('/excel/:userId' ,uploadExcel.single('Excel'), async (req,res) => {
    const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
    let stream = fs.createReadStream(file.path);
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", async function() {
    // remove the first line: header
    //csvData.shift();

    // connect to the MySQL database
    // save csvData
    try{
        for(var i =0;i<=csvData.length;i++){
            const user = await Prod.create({nombre:csvData[i][0],descripcion:csvData[i][1],cantidad:csvData[i][2],precio:csvData[i][3],portada:'null',id_categoria:'0',id_afiliado:req.params.userId});
        }
         //res.json(user);
         res.json(user);
    }catch(e){
        res.json(e);
        
    }
   
  });

stream.pipe(csvStream);

});




router.post('/delete/:userId', async (req,res) => {
    await Prod.destroy({
    where: {
        id_producto:req.params.userId
    }
})
    res.json({ success: 'Se ha eliminado el pro' });
});
router.post('/img', upload.single('file'), async(req, res) => {
       if(req.file) {
        req.body.portada="/prueba/productos/"+req.file.filename;
        const afilia = await Prod.create(req.body);
        res.json(afilia);
    }
    else throw 'error';
});
module.exports = router;