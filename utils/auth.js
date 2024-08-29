const jwt = require('jsonwebtoken');
const secret = '1234';

function generateToken(user){

    const payload = {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
    }
    const token = jwt.sign(payload,secret);
    return token;
}

function verifyToken(token){
    const user = jwt.verify(token, secret);
    return user;
}

module.exports = {
    generateToken,
    verifyToken
}
