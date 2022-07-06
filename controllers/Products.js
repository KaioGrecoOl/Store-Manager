const {
  getAllProductsServices,
  findProductByIServices,
  registerProductServices,
  excludeProductServices,
  updateProductServices,
} = require('../services/Products');

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsServices();

  if (!products) return res.status(400).json({ message: 'Bad request' });

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

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await updateProductServices(id, name);
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(result);
};

const excludeProductControllers = async (req, res) => {
  const { id } = req.params;
  const result = await excludeProductServices(id);

    if (result) {
      return res.status(204).end();
    }
  
   if (result === null) {
     return res.status(404).json({ message: 'Product not found' });
   }
};

module.exports = {
  getAllProductsController,
  findProductByIdController,
  registerProductController,
  excludeProductControllers,
  updateProductController,
};
