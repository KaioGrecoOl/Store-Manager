const express = require('express');

const router = express.Router();
const {
  getAllProductsController,
  findProductByIdController,
  registerProductController,
  excludeProductControllers,
  updateProductController,
} = require('../controllers/Products');

const { productValidation } = require('../middlewares/Products');

router.get('/', getAllProductsController);

router.get('/:id', findProductByIdController);

router.post('/', productValidation, registerProductController);

router.put('/:id', productValidation, updateProductController);

router.delete('/:id', excludeProductControllers);

module.exports = router;
