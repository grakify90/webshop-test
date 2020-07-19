const { toData } = require("../authorization/jwt");
const Customer = require("../models").customer;

//Werkt niet!! Heb een JWT gekregen maar blijft zeggen: Invalid JWT token
const authMiddleware = async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      console.log(auth[1]);
      const data = toData(auth[1]);
      // toData will throw an error if it's invalid JWT, so then the next steps
      // will be skipped and we will go to catch error in that case.

      const costumer = await Customer.findByPk(data.customerId);
      req.customer = customer;
      next();
    } catch (error) {
      res.status(401).send({ message: "Invalid JWT token." });
    }
  } else {
    res
      .status(400)
      .send({ message: "Please provide valid authorization credentials." });
  }
};

module.exports = authMiddleware;
