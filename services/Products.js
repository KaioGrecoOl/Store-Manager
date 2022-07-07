// const {
//   getAllProductsModels,
//   findProductByIdModels,
//   registerProductModels,
//   excludeProductModels,
//   updateProductModels,
// } = require('../models/Products');
const models = require('../models/Products');

const getAllProductsServices = async () => {
  const products = await models.getAllProductsModels();
  return products;
};

const findProductByIServices = async (id) => {
  const product = await models.findProductByIdModels(id);
  if (!product) return null;

  return product;
};

const registerProductServices = async (name) => {
  if (name) {
    const product = await models.registerProductModels(name);
    return product;
  }
  return [];
};

const updateProductServices = async (id, name) => {
  const product = await models.findProductByIdModels(id);
  if (!product) {
    return null;
  }
  const result = await models.updateProductModels(id, name);
  return result;
};

const excludeProductServices = async (id) => {
  const product = await models.findProductByIdModels(id);
  if (product) {
    const result = await models.excludeProductModels(id);
    return result;
  }
  return null;
};

module.exports = {
  getAllProductsServices,
  findProductByIServices,
  registerProductServices,
  excludeProductServices,
  updateProductServices,
};
