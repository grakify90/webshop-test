const Product = require("../models").product;
const express = require("express");
const { Router } = express;
const router = new Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const newProduct = await Product.create({
      name: "Watermelon",
      description: "Nice and juicy, from Spain.",
      price: 5,
      imageUrl:
        "http://upload.evocdn.co.uk/fruitnet/uploads/asset_image/2_1212685_e.jpg",
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

router.get("/:productId", async (req, res, next) => {
  const specificProduct = await Product.findByPk(req.params.productId);
  if (!specificProduct) {
    res.status(404).send({ message: "Product not found." });
  } else {
    res.send(specificProduct);
  }
});

module.exports = router;

const products = [
  {
    id: 1,
    name: "Watermelon",
    description: "Nice and juicy, from Spain.",
    price: 5,
    imageUrl:
      "http://upload.evocdn.co.uk/fruitnet/uploads/asset_image/2_1212685_e.jpg",
    categoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Kimchi",
    description: "Spicy, from South-Korea.",
    price: 2,
    imageUrl:
      "https://www.asianfoodlovers.nl/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/k/i/kimchi.jpg",
    categoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Rookworst",
    description: "Good ol' HEMA classic.",
    price: 3,
    imageUrl:
      "https://i0.wp.com/wateetons.com/wp-content/uploads/2017/11/2017-10-30-17.52.05-e1509950630427.jpg?fit=750%2C1000&ssl=1",
    categoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Calpis soda",
    description: "Bubbly fermented milk drink, from Japan.",
    price: 1,
    imageUrl:
      "https://cdn.myonlinestore.eu/9413baee-6be1-11e9-a722-44a8421b9960/image/cache/full/e117058f68c19f38c4ed00cdc944c96ca70c4c4b.jpg",
    categoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "Umeshu",
    description: "Plum wine, from Japan.",
    price: 8,
    imageUrl:
      "https://www.uisuki.com/202-product_xlarge/choya-premium-umeshu.jpg",
    categoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: "Coolbest",
    description: "Strawberry hill, the best.",
    price: 2,
    imageUrl:
      "https://www.plus.nl/INTERSHOP/static/WFS/PLUS-Site/-/PLUS/nl_NL/product/L/120970.png",
    categoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
