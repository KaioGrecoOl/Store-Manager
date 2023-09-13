const models = require('../models/Sales');
const modelsProd = require('../models/Products');
// const middlewaresSale = require('../middlewares/Sales');

// const saleCheck = async () => {
//   const che = middlewaresSale.validate();
//   const verifyId = await modelsProd.findProductByIdModels();
//   const porudctDb = verifyId.map((list) => list.id);

//   return porudctDb;
// };

const registerSaleServices = async (arr) => {
  const getAllProducts = await modelsProd.getAllProductsModels();
  const mapAllProducts = getAllProducts.map(({ id }) => id);

  const productsValidate = arr.every(({ productId }) =>
    mapAllProducts.includes(productId));

  console.log(productsValidate);

  if (!productsValidate) return false;

  const saleId = await models.registerSalesProduct();
  const promises = arr.map((element) =>
    models.registerSalesProduct(saleId, element));
  await Promise.all(promises);

  const result = {
    id: saleId,
    itemsSold: arr,
  };

  return result;
};

// const registerSaleServices = async (arr) => {
//   const getAllProducts = await modelsProd.getAllProductsModels();
//   const mapAllProducts = getAllProducts.map(({ id }) => id);

//   if (arr.some((test) => !mapAllProducts.includes(test.productId))) {
//     return null;
//   }
// };
// registerSaleServices(2);

  module.exports = { registerSaleServices };