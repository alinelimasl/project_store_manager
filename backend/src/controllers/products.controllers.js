const service = require('../services');
// const httpCodeMap = require('../util/httpCodeMap');

const getAllProducts = async (_req, res) => {
  const { message, status } = await service.getAllProducts();
  return res.status(status).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message, status } = await service.getProductsById(id);
  if (type) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(message);
};

module.exports = {
  getAllProducts,
  getProductsById,
};