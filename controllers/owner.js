const Owner = require('../models/owner.model.js');
const {generateToken} = require('../utils/auth.js');
const bcrypt = require('bcrypt');
function viewOwner(req, res){
    res.render('owner-login');
}

async function registerOwner(req, res){
    await Owner.create(req.body);
}

async function loginOwner(req,res){
    const {email, password} = req.body;
    const owner = await Owner.findOne({email, password});

    if(!owner){
        res.redirect('/');
    }

    const token = generateToken(owner);
    res.cookie('token', token);
    return res.render('createproducts');


}

module.exports = {
    viewOwner,
    registerOwner,
    loginOwner
}