const express = require("express");
const router = express.Router();
const Store = require("../models/store");

//Home screen
router.get("/", (request, response) => {
  response.status(400).json({ ping: "pong" });
});

router.get("/store", async (req, res) => {
  try {
    const products = await Store.getAllProducts();
    res.status(200).json({ products });
  } catch (err) {
    //next(err);
    console.log(err);
  }
});

router.get("/store/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Store.getProductById(productId);
    if (!product) {
      //throw new NotFoundError("Transaction not found")
      throw "Error, product not found";
    }
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
