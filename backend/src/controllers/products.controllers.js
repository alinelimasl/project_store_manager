const service = require('../services');
const httpCodeMap = require('../util/httpCodeMap');

const getAllProducts = async (req, res) => {
  const { status, data } = await service.getAllProducts();
  return res.status(httpCodeMap(status)).json(data);
};

module.exports = {
  getAllProducts,
};