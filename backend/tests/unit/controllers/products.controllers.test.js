const Sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controllers');

describe('Realizando testes - products controller', function () {
  describe('Testando o controller de criação de produtos', function () {
    it('Cria um produto', async function () {
      const request = {
        params: { productsId: 1 },
        body: {},
      };

      const response = {};
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();

      Sinon.stub(productsService, 'requestProducts').resolves({
        status: 'CREATED',
        data: { id: 1, name: 'Martelo de Thor' },
      });

      await productsController.requestProducts(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(response.json.calledWith({ id: 1 })).to.be.equal(true);
    });
  });
});
