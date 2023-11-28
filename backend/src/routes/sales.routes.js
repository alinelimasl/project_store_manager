const express = require('express');
const controllerSale = require('../controllers/sales.controllers');
const { validateSales, productIdValid } = require('../middlewares/sales.middlewares');

const salesRouter = express.Router();

salesRouter.get('/', controllerSale.getAllSales);
salesRouter.get('/:id', controllerSale.getSaleById);
salesRouter.post('/', validateSales, productIdValid, controllerSale.createSale);

module.exports = salesRouter;