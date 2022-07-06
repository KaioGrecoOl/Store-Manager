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

const registerProductModels = async (name) => {
  const [data] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  const result = {
    id: data.insertId,
    name,
  };
  return result;
};

const updateProductModels = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  const result = {
    id,
    name,
  };
  return result;
};

const excludeProductModels = async (id) => {
  const query = `DELETE FROM StoreManager.products
    WHERE id = ?`;
  const data = await connection.execute(query, [id]);
  return data;
};

module.exports = {
  getAllProductsModels,
  findProductByIdModels,
  registerProductModels,
  excludeProductModels,
  updateProductModels,
};
