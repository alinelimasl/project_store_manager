const express = require('express');
const productsRouter = require('./routes/products.routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productsRouter);
// app.use('/products/:id', productsRouter);

module.exports = app;