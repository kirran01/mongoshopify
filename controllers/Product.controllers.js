const Product = require("../models/Product.model");

const createProduct = async (req, res) => {
  const { title, price } = req.body;
  try {
    const createdProduct = await Product.create({
      title,
      price,
    });
    if (createdProduct) {
      res.send(createdProduct);
    }
  } catch (err) {
    res.send(err);
  }
};

const getProduct = (req, res) => {
  res.send("getproducts");
};

module.exports = { createProduct, getProduct };
