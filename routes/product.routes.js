const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
} = require("../controllers/Product.controllers");

router.post("/create-product", createProduct);
router.get("/get-product", getProduct);

module.exports = router;
