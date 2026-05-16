const express = require('express');
const productRoutes = require('../modules/products/product.route');

const router = express.Router();

const moduleRoutes = [
  {
    path: '/product',
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
