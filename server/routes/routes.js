const { getTvs, getProducts } = require("../controllers/itemControllers");

module.exports = app => {
  app.get("/api/tv", getTvs);
  app.get("/api/products", getProducts);
};
