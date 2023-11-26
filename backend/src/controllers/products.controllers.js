const service = require('../services');
// const { getStatusCode } = require('../util/httpCodeMap');

const getAllProducts = async (_req, res) => {
  const { status, data } = await service.getAllProducts();
  return res.status(status).json(data);  
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await service.getProductsById(id);
  return res.status(status).json(data);
};

module.exports = {
  getAllProducts,
  getProductsById,
};