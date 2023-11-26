const { Router } = require('express');
const controller = require('../controllers');

const productsRouter = Router();

productsRouter.get('/', controller.getAllProducts);
productsRouter.get('/:id', controller.getProductsById);

module.exports = productsRouter;