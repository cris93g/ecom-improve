const { getTvs } = require("../controllers/itemControllers");

module.exports = app => {
  app.get("/api/tv", getTvs);
};
