const salesFromDb = [
  {
    saleId: 1,
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
];
const salesByProductId = [
  {
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
];

const salesServiceDb = {
  status: 'SUCCESS',
  data: salesFromDb,
};

const salesServiceDbByProductId = {
  status: 'SUCCESS',
  data: salesByProductId,
};
const salesServiceDbByProductIdError = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

module.exports = {
  salesFromDb,
  salesByProductId,
  salesServiceDb,
  salesServiceDbByProductId,
  salesServiceDbByProductIdError,
};