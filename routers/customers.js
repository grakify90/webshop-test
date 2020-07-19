const Customer = require("../models").customer;
const Order = require("../models").order;
const Product = require("../models").product;
const express = require("express");
const { Router } = express;
const router = new Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res, next) => {
  const allCustomers = await Customer.findAll();
  res.send(allCustomers);
});

router.get("/:customerId", async (req, res, next) => {
  const specificCustomer = await Customer.findByPk(req.params.customerId);
  if (!specificCustomer) {
    res.status(404).send("Customer not found.");
  } else {
    res.send(specificCustomer);
  }
});

router.get("/:customerId/orders", async (req, res, next) => {
  const specificCustomer = await Customer.findByPk(req.params.customerId);
  if (!specificCustomer) {
    res.status(404).send("Customer not found.");
  } else {
    const customersOrders = await Order.findAll({
      where: { customerId: req.params.customerId },
      include: [Product],
    });
    res.send(customersOrders);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { address, email, firstName, lastName, password } = req.body;
  try {
    if (!address || !email || !firstName || !lastName || !password) {
      res.status(400).send({
        message:
          "Please provide all information to create a new customer account.",
      });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newCustomer = await Customer.create({
        address,
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });
      res.send(newCustomer);
    }
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
