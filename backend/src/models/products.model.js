const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};
const getProductsById = async (id) => {
  const [[results]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return results;
};

module.exports = { 
  getAllProducts,
  getProductsById,
};