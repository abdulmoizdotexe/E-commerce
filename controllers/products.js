const Product = require('../models/product.model');
const User = require('../models/user.model');
const multer = require('multer');

function showCreateProducts(req, res){

    if(req.user && req.user.role === 'owner'){
        res.render('createproducts');
    }
        res.redirect('/user');
}

async function createProducts(req,res){
    const {name,
        price,
        discount,
        bgcolor,
        textcolor,
        panelcolor,
        imageUrl
    } = req.body;
    const product = await Product.create({
        name,
        price,
        discount,
        bgcolor,
        textcolor,
        panelcolor,
        imageUrl: `/uploads/${req.file.filename}`
    })

    res.render('index');
}



async function showProducts(req, res){
    const products = await Product.find({});
    if(req.user){
    res.render('shop',{
        products,
        user: req.user
    });
}else{
    res.redirect('/user');
}
}

module.exports = {
    showCreateProducts,
    createProducts,
    showProducts
}