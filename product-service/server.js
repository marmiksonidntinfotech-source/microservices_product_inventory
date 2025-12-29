const app = require("./app");
const sequelize = require("./config/database");

const PORT = 4001;

(async () => {
  await sequelize.sync();
  app.listen(PORT, () =>
    console.log(`Product Service running on port ${PORT}`)
  );
})();
