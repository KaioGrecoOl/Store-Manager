const connection = require('./connection');

const registerSalesModels = async () => {
  const [data] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES (?)',
    [],
  );
  return data;
};

module.exports = { registerSalesModels };
