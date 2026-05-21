const express = require("express");
const router = express.Router();

const productController = require("./product.controller");
const { authMiddleware } = require("food-common-package");

router.get(
  "/",
  authMiddleware("CUSTOMER", "ADMIN"),
  productController.getAllProducts,
);

router.post("/", authMiddleware("ADMIN"), productController.createProduct);

module.exports = router;
