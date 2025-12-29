const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/login", (req, res) => {
  const token = jwt.sign({ user: "admin" }, "SECRET_KEY", {
    expiresIn: "1h",
  });
  res.json({ token });
});


// Product Service
router.get("/products", async (req, res) => {
  const response = await axios.get("http://localhost:4001/products");
  res.json(response.data);
});

router.post("/products", async (req, res) => {
  const response = await axios.post(
    "http://localhost:4001/products",
    req.body
  );
  res.json(response.data);
});

// Inventory Service
router.get("/inventory/:productId", async (req, res) => {
  const response = await axios.get(
    `http://localhost:4002/inventory/${req.params.productId}`
  );
  res.json(response.data);
});

router.post("/inventory/reduce", async (req, res) => {
  const response = await axios.post(
    "http://localhost:4002/inventory/reduce",
    req.body
  );
  res.json(response.data);
});

module.exports = router;
