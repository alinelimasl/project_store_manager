const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [results] = await connection.execute(
    `SELECT sap.sale_id, sa.date, sap.product_id, sap.quantity FROM sales AS sa 
     INNER JOIN sales_products AS sap ON sap.sale_id = sa.id 
     ORDER BY sap.sale_id, sap.product_id;`,
  );
  return camelize(results);
};

module.exports = {
  getAllSales,
};
const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sa.date, sap.product_id, sap.quantity FROM sales AS sa 
     INNER JOIN sales_products AS sap ON sap.sale_id = sa.id 
     WHERE sap.sale_id = ?;`,
    [id],
  );
  return camelize(result);
};

module.exports = {
  getAllSales,
  getSaleById,
};
