const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;
const jsonParser = express.json();
const customerRouter = require("./routers/customers");
const productRouter = require("./routers/products");
const authRouter = require("./routers/authorization");
const orderRouter = require("./routers/orders");
const productOrderRouter = require("./routers/productOrders");
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(jsonParser);

app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/orders", orderRouter);
app.use("/productOrders", productOrderRouter);

//https://webshop-api-nina.herokuapp.com/
