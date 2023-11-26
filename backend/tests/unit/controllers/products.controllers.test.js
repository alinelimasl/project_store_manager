const sinon = require('sinon');
const chai = require('chai');
const SinonChai = require('sinon-chai');
const { expect } = require('chai');
const productsController = require('../../../src/controllers/products.controllers');
const productsService = require('../../../src/services/products.service');

chai.use(SinonChai);

describe('Realizando testes - products controller', function () {
  describe('Testando o controller de criação de produtos', function () {
    it('Cria um produto', async function () {
      const req = { params: {}, body: {} };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await productsController.findAll(req, res);

      expect(res.status.calledWith(201));
      expect(res.json).to.have.been.calledWith(productsService);
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});
