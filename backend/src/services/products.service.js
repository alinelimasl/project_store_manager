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

const getCreateProduct = async (nameProduct) => {
  const createProduct = await modelProduct.getCreateProduct(nameProduct);
  return { status: 'CREATED', data: { id: createProduct, ...nameProduct } };
};

const getUpdateProduct = async (id, name) => {
  const updateProducts = await modelProduct.getUpdateProduct({ id, name });
  if (!updateProducts) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESS', data: { id: Number(id), name } };
};

module.exports = {
  getAllProducts,
  getProductsById,
  getCreateProduct,
  getUpdateProduct,
};
