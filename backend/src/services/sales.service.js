const modelSale = require('../models/sales.model');

const getAllSales = async () => {
  const allSales = await modelSale.getAllSales();
  return { status: 'SUCCESS', data: allSales };
};
const getSaleById = async (id) => {
  const saleById = await modelSale.getSaleById(id);

  if (saleById.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } }; 
  }

  return { status: 'SUCCESS', data: saleById };
};

const createSale = async (itemSold) => {
  const sale = await modelSale.createSale(itemSold);
  return { status: 'CREATED', data: sale };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};