const express = require('express');

const router = express.Router();
const {
  getAllProductsController,
  findProductByIdController,
  registerProductController,
} = require('../controllers/Products');

router.get('/', getAllProductsController);

router.get('/:id', findProductByIdController);

router.post('/', registerProductController);

module.exports = router;
