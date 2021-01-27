const { Ped  } = require('../../db');
const { Op } = require("sequelize");
const router = require('express').Router();
const { check, validationResult } = require('express-validator');
var Excel = require('exceljs');
var workbook = new Excel.Workbook();

router.get('/some/route', async(req, res) =>{
res.writeHead(200, {
    'Content-Disposition': 'attachment; filename="excel.xlsx"',
    'Transfer-Encoding': 'chunked',
    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  var workbook = new Excel.stream.xlsx.WorkbookWriter({ stream: res })
  var worksheet = workbook.addWorksheet('some-worksheet')
  const resp=await Ped.findAll();
  var nose=0;
  worksheet.addRow(['ID PEDIDO', 'ID USUARIO','DIRECCION','PRODUCTOS','FECHA','TOTAL','METODO DE PAGO','TIPO DE ENTREGA','COSTO DE ENVIO','SUBTOTAL','STATUS','ID REPARTIDOR']).commit()
  for(var i=0;i<resp.length;i++){
      worksheet.addRow([resp[i].id_pedido,resp[i].id_user,resp[i].direccion,resp[i].productos,resp[i].fecha,resp[i].total,resp[i].metodo_pago,resp[i].tipo_entrega,resp[i].envio,resp[i].subtotal,resp[i].status,resp[i].id_repartidor]);
  }
    worksheet.commit()
  workbook.commit()
  
});


router.get('/OrderRepa/:RepId', async (req,res) => {
    const users = await Ped.findAll({
        where: {
            id_repartidor : req.params.RepId,
               [Op.or] : [{"status" : "activo"}]
        }
    });
    res.json(users);
});


router.get('/Orderstatusdash/:OrderId', async (req,res) => {
    const users = await Ped.findAll({
        where: {
            id_afiliado : req.params.OrderId,
               [Op.or] : [{"status" : "libre"}, {"status" : "activo"}]
        }
    });
    res.json(users);
});


router.get('/', async (req,res) => {
    const users = await Ped.findAll();
    
    const jsonusers = JSON.parse(JSON.stringify(users));
    res.json(jsonusers);
});



router.post('/', async (req,res) => {
    
    
    
    const user = await Ped.create(req.body);
    res.json(user);
});


router.get('/Orders/:OrderId', async (req,res) => {
    const users = await Ped.findAll({
        where: {
          id_pedido: req.params.OrderId
        }
    });
    res.json(users);
});


router.get('/Ordersafi/:AfiId', async (req,res) => {
    const users = await Ped.findAll({
        where: {
          id_afiliado: req.params.AfiId
        },
        
        order: [
            ['id_pedido', 'DESC']
            ]
    
    });
    res.json(users);
});




router.get('/OrdersUser/:OrderId', async (req,res) => {
    const users = await Ped.findAll({
        where: {
          id_user: req.params.OrderId,
          status : "finalizado"
        }
    });
    res.json(users);
});

router.get('/Orderstatus/:OrderId', async (req,res) => {
    const users = await Ped.findAll({
         where: {
            id_user: req.params.OrderId,
               [Op.or] : [{"status" : "libre"}, {"status" : "activo"}]
        }
        
    });
    res.json(users);
});





router.get('/Orderslibres/:idaf', async (req,res) => {
    const users = await Ped.findAll({
        where: {
          id_afiliado : req.params.idaf,
          status : "libre"
        }
    });
    res.json(users);
});
router.get('/Orderslibre', async (req,res) => {
    const users = await Ped.findAll({
        where: {
          
          status : "libre"
        }
    });
    res.json(users);
});






router.get('/:userId', async (req,res) => {
    const users = await Ped.findAll({
        where: {
          id_pedido: req.params.userId
        }
    });
    res.json(users);
});


router.put('/:userId', async (req,res) => {
    await Ped.update(req.body,{
        where: { id_pedido: req.params.userId }
    });
    res.json({ success: 'Se ha modificado latitud y longitud' });
});

router.put('/qr/:userId', async (req,res) => {
    await Ped.update(req.body,{
        where: { id_pedido: req.params.userId }
    });
    res.json({ success: 'Se ha modificado qr' });
});

router.put('/status/:userId', async (req,res) => {
    await Ped.update(req.body,{
        where: { id_pedido: req.params.userId }
    });
    res.json({ success: 'Se ha modificado el status' });
});

module.exports = router;