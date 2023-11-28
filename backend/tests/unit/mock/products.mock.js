const getAllProductsDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getProductsByIdDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

const productsServiceDb = {
  status: 'SUCCESS',
  data: getAllProductsDB,
};

const productsServiceDbByProductId = {
  status: 'SUCCESS',
  data: getProductsByIdDB,
};
const productsServiceDbByProductIdError = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

module.exports = {
  getAllProductsDB,
  getProductsByIdDB,
  productsServiceDb,
  productsServiceDbByProductId,
  productsServiceDbByProductIdError,
};