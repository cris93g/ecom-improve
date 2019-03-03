require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
routes = require("./routes/routes");

const app = express();
const port = process.env.port || 3001;
routes(app);
app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
