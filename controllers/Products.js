const { getAllProductsServices } = require('../services/Products');

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsServices();

  res.status(200).json(products);
};

module.exports = { getAllProductsController };
