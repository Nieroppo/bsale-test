'use strict'
const express = require('express');
const router = express.Router();


const productController = require('../controllers/product.controller');

router.get('/page/:page?', productController.getAll);
router.get('/search/:search?/page/:page?', productController.Search);

module.exports = router