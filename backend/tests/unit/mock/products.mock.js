const productsFromDb = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  }];

const productsById = {
  id: 1,
  name: 'Martelo de Thor',
};
const productsFromServiceDB = {
  status: 'SUCCESS',
  data: productsFromDb,
};
const productsByIdFromServiceDB = {
  status: 'SUCCESS',
  data: productsById,
};

const errorProducts = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};
module.exports = {
  productsFromDb,
  productsById,
  productsFromServiceDB,
  productsByIdFromServiceDB,
  errorProducts,
};