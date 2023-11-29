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
const getCreateProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  
  );
  return insertId;
};

const getUpdateProduct = async (products) => {
  const { id, name } = products;
  const [{ affectedRows }] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  if (affectedRows !== 1) return null;
  return products;
};

module.exports = { 
  getAllProducts,
  getProductsById,
  getCreateProduct,
  getUpdateProduct,
};