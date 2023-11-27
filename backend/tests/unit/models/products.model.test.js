const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const modelProduct = require('../../../src/models/products.model');
const mocks = require('../mock/products.mock');

describe('Realizando testes - model de produtos', function () {
  it('Recuperando products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mocks.getAllProductsDB]]);
    
    const products = await modelProduct.getAllProducts();

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(1);
    expect(products[0]).to.be.deep.equals(mocks.getAllProductsDB);
  });
  
  it('Recuperando products por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mocks.getProductsByIdDB]]);
  
    const products = await modelProduct.getProductsById(1);
    expect(products).to.be.an('object');
    expect(products).to.be.deep.equals(mocks.getProductsByIdDB);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
