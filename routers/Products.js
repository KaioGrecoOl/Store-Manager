const express = require('express');

const router = express.Router();
const { getAllProductsController } = require('../controllers/Products');

router.get('/', getAllProductsController);

module.exports = router;
