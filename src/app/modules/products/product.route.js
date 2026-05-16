const express = require('express');
const router = express.Router();

const productController = require('./product.controller');
const authMiddleware = require('../../middlewares/auth.js');

router.post('/', productController.createProduct);

router.get("/", authMiddleware, productController.getAllProducts);

module.exports = router;