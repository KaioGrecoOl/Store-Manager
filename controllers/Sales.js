const services = require('../services/Sales');

const registerSaleController = async (req, res) => {
  const data = req.body;
  const result = await services.registerSaleServices(data);
  res.status(201).json(result);
};

module.exports = { registerSaleController };
