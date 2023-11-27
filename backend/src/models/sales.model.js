const camelize = ('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const results = await connection.execute(
    'SELECT sa.sale_id, sa.product_id, sa.quantity, s.date '
        + 'FROM sales_products AS sa '
        + 'INNER JOIN sales AS s ON sa.sale_id = s.id;',
  );
  return camelize(results);
};

module.exports = {
  getAllSales,
};
