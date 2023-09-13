const data = {
  productIdRequired: { status: 400, message: 'productId" is required' },
  quantityRequired: { status: 400, message: 'quantity" is required' },
  quantitySmaller: {
    status: 422,
    message: 'quantity" must be greater than or equal to 1',
  },
  productNotFound: { status: 404, message: 'Product not found' },
};

const productIdRequired = (productId) => !productId;
const quantityRequired = (quantity) => !quantity && quantity !== 0;
const quantitySmaller = (quantity) => quantity <= 0;
const productInexist = (productId) => !productId;

const verifyData = ({ productId, quantity }) => {
  if (productIdRequired(productId)) throw data.productIdRequired;
  if (quantitySmaller(quantity)) throw data.quantitySmaller;
  if (quantityRequired(quantity)) throw data.quantityRequired;
  if (productInexist(productId)) throw data.productNotFound;
};

const validate = (req, res, next) => {
  try {
    req.body.forEach(verifyData);

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  validate,
};
