'use strict'
const express = require('express');
const router = express.Router();


const productController = require('../controllers/product.controller');

router.get('/page/:page?', productController.getAll);
router.get('/category/:category/page/:page?', productController.getByCategory);
router.get('/search/:search?/page/:page?', productController.Search);

module.exports = router