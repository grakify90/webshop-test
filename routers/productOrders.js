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
  const productId = parseInt(req.params.productId);
  // const { orderId } = req.body;
  // const order = parseInt(orderId);
  // console.log(typeof order);
  const newProductOrder = await ProductOrder.create({
    productId: productId,
    orderId: 2,
  });
  res.send(newProductOrder);
});

router.delete("/:productId", async (req, res, next) => {
  const orderId = req.body;
  const productToDelete = await ProductOrder.findOne({
    where: { productId: req.params.productId, orderId: orderId },
  });
  try {
    const deleted = await productToDelete.destroy();
    res.send(deleted);
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    await ProductOrder.destroy({ where: {}, truncate: true });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
