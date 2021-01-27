const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    
    if(!req.headers['user-token']){
        return res.json({ error: 'No existe token' });
    }
    
    const userToken = req.headers['user-token'];
    let payload = {};
    try{
        payload = jwt.decode(userToken, 'IVP^cP73qRi8');   
    } catch(err){
        return res.json({ error: 'El token es invalido' });
    }
    
    if(payload.expiredAt < moment().unix()){
        return res.json({ error: 'El token ha expirado' });
    }
    
    next();
    
}

module.exports = {
    checkToken: checkToken 
}