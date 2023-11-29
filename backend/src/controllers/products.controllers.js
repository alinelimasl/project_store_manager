const serviceProduct = require('../services/products.service');
const httpCodeMap = require('../util/httpCodeMap');

const getAllProducts = async (_req, res) => {
  const { status, data } = await serviceProduct.getAllProducts();
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await serviceProduct.getProductsById(id);
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

const getCreateProduct = async (req, res) => {
  const { body } = req;
  const { status, data } = await serviceProduct.getCreateProduct(body);
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

const getUpdateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { status, data } = await serviceProduct.getUpdateProduct(id, name);
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

module.exports = {
  getAllProducts,
  getProductsById,
  getCreateProduct,
  getUpdateProduct,
};