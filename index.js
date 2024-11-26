const express = require("express");
const products = require("./products.json");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is my second server on run .");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const dynamicId = req.params.id;
  console.log(typeof dynamicId);
  const product =
    products.find((product) => product.productId === dynamicId) || {};
  res.send(product);
});

app.post("/user", (req, res) => {
  console.log("post is hitting");
  console.log(req.body);
  const newProducts = req.body;
  newProducts.productId = products.length + 1;
  products.push(newProducts);
  res.send(newProducts);
});
app.listen(port);
