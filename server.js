require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");

const productRouter=require('./routes/product.routes')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/products', productRouter)

app.get("/", (req, res) => {
  res.send("shopify server up");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("//////////////// Shopify /////////////");
    console.log("connected to --->", res.connections[0].name);
    app.listen(PORT, () => {
      console.log("Shopify backend up on-->", +PORT);
    });
  })
  .catch((err) => {
    console.log(err, "err - server");
  });
