require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const controller = require("./controller");

const app = express();
app.use(bodyParser.json());

//setting up massive to make connection to the db
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

//endpoints
app.get("/api/inventory", controller.getAll);
app.post("/api/product", controller.create);

app.delete("/api/product/:id", controller.delete);
app.put("/api/product/:id", controller.update);

app.get("/api/inventory/:id", controller.getOne);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Dancing on PORT:${PORT}`);
});
