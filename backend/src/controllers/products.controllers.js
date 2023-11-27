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

module.exports = {
  getAllProducts,
  getProductsById,
};