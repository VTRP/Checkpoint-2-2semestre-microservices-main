const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://eduardo:eduardo123@cluster0.pug7haa.mongodb.net/test");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

//registrar a model
require('./models/category')
require('./models/product');

//registrar a rota
const categoryRouter = require('./routes/category-route')
const productRouter = require('./routes/product-route');
const index = require('./routes/index')

app.use('/', index);
app.use('/products', productRouter);
app.use('/category', categoryRouter)

module.exports = app

