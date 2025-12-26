const express = require("express");
const gatewayRoutes = require("./routes/gateway.routes");
const authMiddleware = require("./middlewares/auth");

const app = express();
app.use(express.json());

app.use(authMiddleware);
app.use("/", gatewayRoutes);

module.exports = app;
