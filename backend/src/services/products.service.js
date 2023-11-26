const model = require('../models');

const getAllProducts = async () => {
  const allProducts = await model.getAllProducts();
  return { status: 'SUCCESS', data: allProducts };
};
const getProductsById = async (id) => {
  const productsById = await model.getProductsById(id);
  if (!productsById) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESS', data: productsById };
};

module.exports = {
  getAllProducts,
  getProductsById,
};