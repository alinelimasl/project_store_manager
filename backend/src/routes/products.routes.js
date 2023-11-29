const express = require('express');
const controllerProduct = require('../controllers/products.controllers');
const validateProducts = require('../middlewares/products.middleware');

const productsRouter = express.Router();

productsRouter.get('/', controllerProduct.getAllProducts);
productsRouter.get('/:id', controllerProduct.getProductsById);
productsRouter.post('/', validateProducts, controllerProduct.getCreateProduct);
productsRouter.put('/:id', validateProducts, controllerProduct.getUpdateProduct);

module.exports = productsRouter;