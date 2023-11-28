const express = require('express');
const controllerProduct = require('../controllers/products.controllers');

const productsRouter = express.Router();

productsRouter.get('/', controllerProduct.getAllProducts);
productsRouter.get('/:id', controllerProduct.getProductsById);
productsRouter.post('/', controllerProduct.getCreateProduct);

module.exports = productsRouter;