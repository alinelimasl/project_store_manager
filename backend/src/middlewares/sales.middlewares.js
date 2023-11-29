const modelProduct = require('../models/products.model');

const validateSales = async (req, res, next) => {
  const itemsSold = req.body;
  const salesProductId = itemsSold.some((item) => item.productId);
  if (!salesProductId) {
    return res.status(400).json({ message: '"productId" is required' }); 
  }
  const salesProductQuantity = itemsSold.some((item) => item.quantity !== undefined);
  if (!salesProductQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const quantityValid = itemsSold.some((item) => item.quantity <= 0);
  if (quantityValid) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  
  next();
};

const productIdValid = async (req, res, next) => {
  const itemsSold = req.body;
  const salesProductId = itemsSold.map((item) => item.productId);
  const searchId = await salesProductId.map((id) => modelProduct.getProductsById(id));
  const products = await Promise.all(searchId);

  if (products.some((product) => product === undefined)) {
    return res.status(404).json({ message: 'Product not found' }); 
  }
  next();
};

module.exports = {
  validateSales,
  productIdValid,
};