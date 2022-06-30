const connection = require('./connection');

const getAllProductsModels = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [data] = await connection.execute(query);
  console.log(data);
  return data;
};

const findProductByIdModels = async (id) => {
  const [data] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  
  if (data.length === 0) return null;

  return data[0];
};

module.exports = { getAllProductsModels, findProductByIdModels };
