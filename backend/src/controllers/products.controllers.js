const productsService = require('../services/products.service');
const { getStatusCode } = require('../util/httpCodeMap');

const requestProducts = async (req, res) => {
  const { productsId } = req.params;
  const { name, quantity, waypoints } = req.body;

  const { status, data } = await productsService.requestProducts({
    productsId,
    name,
    quantity,
    waypoints,
  });

  const httpCode = getStatusCode(status);

  res.status(httpCode).json(data);
};

module.exports = {
  requestProducts,
};