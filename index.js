const express = require('express');
const mongoose = require('mongoose');
const ownerRoute = require('./routes/owner.js');
const userRoute = require('./routes/user.js');
const productRoute = require('./routes/product.js');
const path = require('path');
const ejs = require('ejs');
const {checkValidation} = require('./middlewares/auth.js');
const cookieParser = require('cookie-parser');

mongoose.connect("mongodb+srv://moizabdul179:TEIiHRy69ojG9z8T@cruddb.sqydmxe.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=cruddb")
.then(()=>{console.log("MongoDB connected")})
.catch((e)=>{console.log(e)});

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve('./public')))

app.use(checkValidation('token'));
app.use('/owner', ownerRoute);
app.use('/user', userRoute);
app.use('/product', productRoute);


app.listen(8000);