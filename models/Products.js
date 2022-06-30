const connection = require('./connection');

const getAllProductsModels = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [data] = await connection.execute(query);
  console.log(data);
  return data;
};

module.exports = { getAllProductsModels };
