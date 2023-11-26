// const productsModel = require('../models/products.model');
// const findAllProducts = async () => {
//   const products = await productsModel.findAllProducts();
//   return products;
// };

// const findByIdProducts = async (id) => {
//   const product = await productsModel.findByIdProducts(id);
//   if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
//   return product;
// };

// module.exports = {
//   findAllProducts,
//   findByIdProducts,
// };
const model = require('../models');

const getAllProducts = async () => {
  const allProducts = await model.getAllProducts();
  return { status: 200, data: allProducts };
};

module.exports = {
  getAllProducts,
};