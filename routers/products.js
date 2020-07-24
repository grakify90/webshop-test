const Product = require("../models").product;
const Category = require("../models").category;
const express = require("express");
const { Router } = express;
const router = new Router();

router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll({ include: [Category] });
  res.send(allProducts);
});

router.get("/:productId", async (req, res, next) => {
  const specificProduct = await Product.findByPk(req.params.productId, {
    include: [Category],
  });
  if (!specificProduct) {
    res.status(404).send({ message: "Product not found." });
  } else {
    res.send(specificProduct);
  }
});

module.exports = router;
