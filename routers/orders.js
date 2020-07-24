const { Router } = require("express");
const Order = require("../models").order;
const Product = require("../models").product;
const authMiddleware = require("../authorization/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  const allOrders = await Order.findAll({ include: [Product] });
  res.send(allOrders);
});

router.get("/:orderId", async (req, res, next) => {
  const orderId = req.params.orderId;
  const specificOrder = await Order.findByPk(orderId, { include: [Product] });
  res.send(specificOrder);
});

router.post("/", async (req, res, next) => {
  const date = new Date();
  //customerId?
  const newOrder = await Order.create({
    date: date,
  });
  res.send(newOrder);
});

router.delete("/:orderId", async (req, res, next) => {
  const orderToDelete = await Order.findByPk(req.params.orderId);
  try {
    const deleted = await orderToDelete.destroy();
    res.send(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
