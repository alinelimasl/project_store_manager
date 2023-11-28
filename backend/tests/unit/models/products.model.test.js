const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const modelProduct = require('../../../src/models/products.model');
const { getAllProductsDB, getProductsByIdDB } = require('../mock/products.mock');

describe('Realizando testes - model de produtos', function () {
  it('Recuperando products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([getAllProductsDB]);
    const products = await modelProduct.getAllProducts();

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(3);
    expect(products).to.be.deep.equal(getAllProductsDB);
  });
  
  it('Recuperando products por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[getProductsByIdDB]]);
    const products = await modelProduct.getProductsById(1);

    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(1);
    expect(products).to.be.deep.equal(getProductsByIdDB);
  });

  it('Erro ao recuperar products por id', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);
    const products = await modelProduct.getProductsById(555555555);

    expect(products).to.be.an('undefined');
  });
  
  afterEach(function () {
    sinon.restore();
  });
});