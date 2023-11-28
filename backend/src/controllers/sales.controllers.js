const serviceSales = require('../services/sales.service');
const httpCodeMap = require('../util/httpCodeMap');

const getAllSales = async (_req, res) => {
  const { status, data } = await serviceSales.getAllSales();
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await serviceSales.getSaleById(id);
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

const createSale = async (req, res) => {
  const { body } = req;
  const { status, data } = await serviceSales.createSale(body);
  const code = httpCodeMap(status);
  return res.status(code).json(data);
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};