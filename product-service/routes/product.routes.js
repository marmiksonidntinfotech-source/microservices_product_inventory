const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET /products
router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// POST /products
router.post("/", async (req, res) => {
  const { name, price } = req.body;
  const product = await Product.create({ name, price });
  res.status(201).json(product);
});

module.exports = router;
