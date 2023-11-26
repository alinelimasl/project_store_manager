const { expect } = require('chai');
const Sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');

describe('Products Service', function () {
  describe('Create a product', function () {
    it('Deve retornar ao tentar cadastrar um produto com erro', async function () {
      const products = {
        id: 4, name: 'Produto 4',
      };
      const { status, data } = await productsService.createProduct(products);

      expect(status).to.be.equal('INVALID_DATA');
      expect(data).to.be.equal('Product not found');
    });
  });
  it('Deve retornar ao tentar cadastrar um produto com sucesso', async function () {
    const products = {
      id: 2, name: 'Traje de encolhimento',
    };

    Sinon.stub(productsModel, 'createProducts').resolves(products);

    const { status, data } = await productsService.createProduct(products);

    expect(status).to.be.equal('CREATED');
    expect(data).to.be.deep.equal(products);
  });
  afterEach(function () {
    Sinon.restore();
  });
});