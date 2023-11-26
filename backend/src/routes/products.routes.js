const { Router } = require('express');
const productsModel = require('../models/products.model');

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
  const products = await productsModel.findAll();
  res.status(200).json(products);
});
productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const productsId = await productsModel.findById(id);
  res.status(200).json(productsId);
});

module.exports = productsRouter;
