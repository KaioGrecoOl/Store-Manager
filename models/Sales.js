const connection = require('./connection');

const registerSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP())';
  const [data] = await connection.execute(query);
  const result = {
    saleId: data.insertId,
  };
  return result;
};

const registerSalesProduct = async (salesId, productId, quantity) => {
  const query = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  const [data] = await connection.execute(query, [salesId, productId, quantity]);
  const result = {
    id: data.insertId,

  };
  console.log(result);
  return result;
};

registerSalesProduct(1, 2, 3);
registerSalesProduct(2, 3, 4);

module.exports = { registerSale, registerSalesProduct };
