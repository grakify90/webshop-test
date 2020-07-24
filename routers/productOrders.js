const { Router } = require("express");
const Order = require("../models").order;
const Product = require("../models").product;
const ProductOrder = require("../models").productOrder;
const authMiddleware = require("../authorization/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  const allProductOrders = await ProductOrder.findAll({ include: [Product] });
  res.send(allProductOrders);
});

router.post("/:productId", async (req, res, next) => {
  const newProductOrder = await ProductOrder.create({
    productId: req.params.productId,
    orderId: 2,
    //hardcoded order
  });
  res.send(newProductOrder);
});

router.delete("/:productId", async (req, res, next) => {
  const productToDelete = await ProductOrder.findOne({
    where: { productId: req.params.productId },
  });
  //this should also change, include orderId somehow
  try {
    const deleted = await productToDelete.destroy();
    res.send(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
