const model = require('../models');

const getAllProducts = async () => {
  const allProducts = await model.getAllProducts();
  return { type: null, message: allProducts, status: 200 };
};
const getProductsById = async (id) => {
  const productsById = await model.getProductsById(id);
  if (!productsById) {
    return { type: 'error', message: 'Product not found', status: 404 };
  }
  return { type: null, message: productsById, status: 200 };
};

module.exports = {
  getAllProducts,
  getProductsById,
};