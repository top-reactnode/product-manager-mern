const express = require("express");
const cors = require("cors");

const app = express();

//Require config for database
require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Require routes
require("./server/routes/product.routes")(app);

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
