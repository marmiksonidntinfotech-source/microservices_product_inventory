const express = require("express");
const Inventory = require("../models/Inventory");

const router = express.Router();

// GET /inventory/:productId
router.get("/:productId", async (req, res) => {
  const inventory = await Inventory.findByPk(req.params.productId);
  res.json(inventory);
});

// POST /inventory/reduce
router.post("/reduce", async (req, res) => {
  const { productId, quantity } = req.body;

  const inventory = await Inventory.findByPk(productId);
  if (!inventory || inventory.stock < quantity) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  inventory.stock -= quantity;
  await inventory.save();

  res.json(inventory);
});

module.exports = router;
