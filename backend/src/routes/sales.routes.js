const express = require('express');
const controllerSale = require('../controllers/sales.controllers');

const salesRouter = express.Router();

salesRouter.get('/', controllerSale.getAllSales);

module.exports = salesRouter;