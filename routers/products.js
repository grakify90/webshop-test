const Product = require("../models").product;
const express = require("express");
const { Router } = express;
const router = new Router();

router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

router.get("/:productId", async (req, res, next) => {
  const specificProduct = await Product.findByPk(req.params.productId);
  if (!specificProduct) {
    res.status(404).send({ message: "Product not found." });
  } else {
    res.send(specificProduct);
  }
});

module.exports = router;
