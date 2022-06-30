const express = require('express');

const router = express.Router();
const {
  getAllProductsController,
  findProductByIdController,
  registerProductController,
} = require('../controllers/Products');

const { productValidation } = require('../middlewares/Products');

router.get('/', getAllProductsController);

router.get('/:id', findProductByIdController);

router.post('/', productValidation, registerProductController);

module.exports = router;
