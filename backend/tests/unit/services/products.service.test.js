const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');
const mocks = require('../mock/products.mock');
const service = require('../../../src/services');

describe('Realizando testes - serviço do produto', function () {
  describe('Testando services', function () {
    it('Deve retornar um produto', async function () {
      sinon.stub(model, 'getAllProducts').resolves({ status: 'SUCCESS', data: mocks.getAllProductsDB });

      const products = await service.getAllProducts();
      expect(products).to.be.an('object');
      expect(products.status).to.be.equal('SUCCESS');
      expect(products.data).to.be.an('object');
    });

    it('Deve retornar o id do produto', async function () {
      const productId = 1;
      sinon.stub(model, 'getProductsById').resolves({ status: 'SUCCESS', data: mocks.getProductsByIdDB });

      const product = await service.getProductsById(productId);
      expect(product).to.be.an('object');
      expect(product.status).to.be.equal('SUCCESS');
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});