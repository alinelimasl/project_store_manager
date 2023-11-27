const modelSale = require('../models/sales.model');

const getAllSales = async () => {
  const allSales = await modelSale.getAllSales();
  return { status: 'SUCCESS', data: allSales };
};

module.exports = {
  getAllSales,
};