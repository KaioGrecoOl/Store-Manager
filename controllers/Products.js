const {
  getAllProductsServices,
  findProductByIServices,
  registerProductServices,
} = require('../services/Products');

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsServices();

  res.status(200).json(products);
};

const findProductByIdController = async (req, res) => {
  const { id } = req.params;

  const product = await findProductByIServices(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product);
};

const registerProductController = async (req, res) => {
  const { name } = req.body;

  const product = await registerProductServices(name);

  if (!product) return res.status(400).json({ message: 'Invalid data' });

  res.status(201).json(product);
};

module.exports = {
  getAllProductsController,
  findProductByIdController,
  registerProductController,
};
