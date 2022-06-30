const Product = require('../services/Products');

const getAllProducts = async (req, res) => {
  const products = await Product.getAllProducts();

  res.status(200).json(products);
};

module.exports = { getAllProducts };
