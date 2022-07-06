const {
  getAllProductsModels,
  findProductByIdModels,
  registerProductModels,
  excludeProductModels,
  updateProductModels,
} = require('../models/Products');

const getAllProductsServices = async () => {
  const products = await getAllProductsModels();
  return products;
};

const findProductByIServices = async (id) => {
  const product = await findProductByIdModels(id);
  if (!product) return null;

  return product;
};

const registerProductServices = async (name) => {
  if (name) {
    const product = await registerProductModels(name);
    return product;
  }
  return [];
};

const updateProductServices = async (id, name) => {
  const product = await findProductByIdModels(id);
  if (!product) {
    return null;
  }
  const result = await updateProductModels(id, name);
  return result;
};

const excludeProductServices = async (id) => {
  const product = await findProductByIdModels(id);
  if (product) {
    const result = await excludeProductModels(id);
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
