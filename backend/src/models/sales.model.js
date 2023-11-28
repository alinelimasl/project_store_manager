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

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sa.date, sap.product_id, sap.quantity FROM sales AS sa 
     INNER JOIN sales_products AS sap ON sap.sale_id = sa.id 
     WHERE sap.sale_id = ?;`,
    [id],
  );
  return camelize(result);
};

const createSale = async (itemSold) => {
  const [[{ id }]] = await connection.execute(
    'SELECT id FROM sales ORDER BY id DESC LIMIT 1',
  );
  const newInsertSale = id + 1;
  console.log(newInsertSale);
  const salesProductInsert = itemSold.map(async (item) => {
    const { productId, quantity } = item;
    await connection.execute('INSERT INTO sales SET date = NOW()');
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
      [newInsertSale, productId, quantity],
    );
    return { productId, quantity };
  });

  const sales = await Promise.all(salesProductInsert);

  return { id: newInsertSale, itemsSold: sales };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};