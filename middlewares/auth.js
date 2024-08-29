const { verifyToken } = require('../utils/auth.js');

function checkValidation(cookieName){
    return (req,res,next)=>{
    const token = req.cookies[cookieName];

    if(!token){
        return next();
    }

    const payload = verifyToken(token);

    req.user = payload;
    return next();
    }
    
}


module.exports = {
    checkValidation
}
