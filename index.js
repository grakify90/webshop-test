const express = require("express");
const app = express();
const port = 4000;
const jsonParser = express.json();
const customerRouter = require("./routers/customers");
const productRouter = require("./routers/products");
const authRouter = require("./routers/authorization");

app.listen(port, () => console.log(`Listening on ${port}`));

app.use(jsonParser);

app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/auth", authRouter);
