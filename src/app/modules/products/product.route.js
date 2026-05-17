const express = require('express');
const router = express.Router();

const productController = require('./product.controller');

router.post('/', productController.createProduct);

router.get("/", productController.getAllProducts);

module.exports = router;