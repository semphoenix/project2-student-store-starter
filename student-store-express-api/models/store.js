const { storage } = require("../data/storage");

class Store {
  static async getProductById(id) {
    const product = storage
      .get("products")
      .find({ id: Number(id) })
      .value();
    return product;
  }
  static async getAllProducts() {
    const products = storage.get("products").value();
    return products;
  }
}

module.exports = Store;
