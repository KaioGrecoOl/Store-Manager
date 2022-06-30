const { getAllProductsModels } = require('../models/Products');

const getAllProductsServices = async () => {
  const products = await getAllProductsModels();
  return products;
};

module.exports = { getAllProductsServices };
