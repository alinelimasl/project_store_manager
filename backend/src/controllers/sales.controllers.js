const serviceSales = require('../services/sales.service');
const httpCodeMap = require('../util/httpCodeMap');

const getAllSales = async (_req, res) => {
  const { status, data } = await serviceSales.getAllSales();
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

module.exports = {
  getAllSales,
};