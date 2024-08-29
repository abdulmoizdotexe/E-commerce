const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const {generateToken} = require('../utils/auth.js')

function viewLogin(req, res){

    res.render('index');
}

function registerUser(req, res){

    const {email, password, name} = req.body;
    bcrypt.hash(password, 10, async (err,hash)=>{
        const user = await User.create({
            email,
            password: hash,
            name,
        });

        const token = generateToken(user);
        res.cookie("token", token);
        return res.render('index');
    })
}

async function loginUser(req, res){
    const {email, password} = req.body;

    const user = await User.findOne({email: email});

    if(!user){
        console.log("user not found");
    }

    bcrypt.compare(password, user.password, (err, result)=>{
        if(result){
        const token = generateToken(user);
        res.cookie("token", token);
        console.log(token);    
        res.redirect('/product/show');
        }
        else{
            console.log("wrong password");
        }
    })
}

module.exports = {
    viewLogin,
    registerUser,
    loginUser
}