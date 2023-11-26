const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models/products.model');
const { productsFromDB } = require('../mock/products.mock');

describe('Testando o model de produtos', function () {
  it('Recuperando products com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productsFromDB]]);
    
    const products = await productsModel.findAll();
    expect(products).to.be.an('array');
    expect(products).to.have.lengthOf(5);
    expect(products).to.be.deep.equal(productsFromDB);
  });
  
  it('Recuperando products por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productsFromDB]]);
  
    const inputData = 1;
    const products = await productsModel.findById(inputData);
    expect(products).to.be.an('object');
    expect(products).to.be.deep.equal(productsFromDB);
  });
  
  it('Erro ao recuperar products', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);
  
    const products = await productsModel.findById();
  
    expect(products).to.be.equal(undefined);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
