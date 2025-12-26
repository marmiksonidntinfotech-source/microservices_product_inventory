const app = require("./app");
const sequelize = require("./config/database");

const PORT = 4002;

(async () => {
  await sequelize.sync();
  app.listen(PORT, () =>
    console.log(`Inventory Service running on port ${PORT}`)
  );
})();
