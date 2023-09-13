const express = require('express');

const router = express.Router();
const { registerSaleController } = require('../controllers/Sales');
const { validate } = require('../middlewares/Sales');

router.post('/', validate, registerSaleController);

module.exports = router;
