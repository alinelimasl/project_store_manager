const { Router } = require('express');
// const productsService = require('../services/products.service');
const controller = require('../controllers');

const productsRouter = Router();

productsRouter.get('/', controller.getAllProducts);

// productsRouter.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const product = await productsService.findById(id);
//   return res.status(200).json(product);
// });

module.exports = productsRouter;