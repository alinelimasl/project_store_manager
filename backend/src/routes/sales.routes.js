const express = require('express');
const controllerSale = require('../controllers/sales.controllers');

const salesRouter = express.Router();

salesRouter.get('/', controllerSale.getAllSales);
salesRouter.get('/:id', controllerSale.getSaleById);

module.exports = salesRouter;