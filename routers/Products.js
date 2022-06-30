const express = require('express');

const router = express.Router();
const { getAllProductsController, findProductByIdController } = require('../controllers/Products');

router.get('/', getAllProductsController);

router.get('/:id', findProductByIdController);

module.exports = router;
