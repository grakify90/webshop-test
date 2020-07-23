const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const jsonParser = express.json();
const customerRouter = require("./routers/customers");
const productRouter = require("./routers/products");
const authRouter = require("./routers/authorization");
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(jsonParser);

app.use("/customers", customerRouter);
app.use("/products", productRouter);
app.use("/auth", authRouter);
