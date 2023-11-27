const modelProduct = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await modelProduct.getAllProducts();
  return { status: 'SUCCESS', data: allProducts };
};

const getProductsById = async (id) => {
  const productsById = await modelProduct.getProductsById(id);

  if (!productsById) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } }; 
  }
  return { status: 'SUCCESS', data: productsById };
};

module.exports = {
  getAllProducts,
  getProductsById,
};
