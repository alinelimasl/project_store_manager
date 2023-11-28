const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/products.model');
const { getAllProductsDB, getProductsByIdDB, productsServiceDb, productsServiceDbByProductId,
  productsServiceDbByProductIdError, 
} = require('../mock/products.mock');
const serviceProduct = require('../../../src/services/products.service');

describe('Realizando testes - serviço do produto', function () {
  it('Deve retornar um produto', async function () {
    sinon.stub(productModel, 'getAllProducts').resolves(getAllProductsDB);
    const products = await serviceProduct.getAllProducts();
  
    expect(products).to.be.deep.equal(productsServiceDb);
    expect(products.status).to.be.equal('SUCCESS');
    expect(products.data).to.be.an('array');
  });

  it('Recuperando o id do produto', async function () {
    sinon.stub(productModel, 'getProductsById').resolves(getProductsByIdDB);
    const product = await serviceProduct.getProductsById(1);
  
    expect(product).to.be.deep.equal(productsServiceDbByProductId);
    expect(product.status).to.be.equal('SUCCESS');
    expect(product.data).to.be.an('array');
    expect(product.data).to.have.lengthOf(1);
  });

  it('Recuperando o id do produto com erro', async function () {
    sinon.stub(productModel, 'getProductsById').resolves(undefined);
    const product = await serviceProduct.getProductsById(5555555);
  
    expect(product).to.be.deep.equal(productsServiceDbByProductIdError);
    expect(product.status).to.be.equal('NOT_FOUND');
    expect(product.data.message).to.be.equal('Product not found');
  });

  afterEach(function () {
    sinon.restore();
  });
});
