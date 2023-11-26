const productsModel = require('../models/products.model');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { status: 'SUCCESS', data: products };
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESS', data: product };
};

module.exports = {
  findAll,
  findById,
};