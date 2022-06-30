const Product = require('../models/Products');

const getAllProducts = async () => {
  const products = await Product.getAllProducts();
  return products;
};

module.exports = { getAllProducts };
