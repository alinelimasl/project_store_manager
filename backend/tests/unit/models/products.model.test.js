const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const model = require('../../../src/models');
const mocks = require('../mock/products.mock');

describe('Realizando testes - model de produtos', function () {
  it('Recuperando products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mocks.getAllProductsDB]]);
    
    const products = await model.getAllProducts();

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(1);
    expect(products[0]).to.be.deep.equals(mocks.getAllProductsDB);
  });
  
  it('Recuperando products por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[mocks.getProductsByIdDB]]);
  
    const products = await model.getProductsById(1);
    expect(products).to.be.an('object');
    expect(products).to.be.deep.equals(mocks.getProductsByIdDB);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
