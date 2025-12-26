const express = require("express");
const inventoryRoutes = require("./routes/inventory.routes");

const app = express();
app.use(express.json());

app.use("/inventory", inventoryRoutes);

module.exports = app;