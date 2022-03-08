'use stric'

const bodyParser = require('body-parser');
const express = require('express');

const config = require('./config');

const app = express();

const productsRoutes = require('./routes/product.routes');

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//PORT
app.set('port', config.PORT);

//Routes
app.use('/api/products', productsRoutes);


module.exports = app;
