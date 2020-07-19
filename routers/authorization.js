const { Router } = require("express");
const { toJWT } = require("../authorization/jwt");
const bcrypt = require("bcrypt");
const Customer = require("../models").customer;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ message: "Provide a valid email and password." });
    } else {
      const customer = await Customer.findOne({ where: { email: email } });
      if (!customer) {
        res.status(404).send({ message: "Customer not found." });
      } else if (!bcrypt.compareSync(password, customer.password)) {
        res.status(400).send({ message: "Invalid password." });
      } else {
        const jwt = toJWT({ customerId: customer.id });
        console.log(customer);
        console.log(jwt);
        res.send(jwt);
      }
    }
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
