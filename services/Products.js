const { getAllProductsModels, findProductByIdModels } = require('../models/Products');

const getAllProductsServices = async () => {
  const products = await getAllProductsModels();
  return products;
};

const findProductByIServices = async (id) => {
  const product = await findProductByIdModels(id);
  if (!product) return null;

  return product;
};

module.exports = { getAllProductsServices, findProductByIServices };
