const sinon = require('sinon');
const chai = require('chai');
const SinonChai = require('sinon-chai');
const { expect } = require('chai');
const mocks = require('../mock/products.mock');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(SinonChai);

describe('Realizando testes - controller dos produtos', function () {
  describe('Testando o controller de criação de produtos', function () {
    it('Cria um produto', async function () {
      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      sinon.stub(service, 'getAllProducts').resolves({ status: 404, data: mocks.getAllProductsDB });

      await controller.getAllProducts(req, res);
      
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(mocks.getAllProductsDB);
    });

    it('Testa produto com id', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returnsThis();
      res.json = sinon.stub();

      sinon
        .stub(service, 'getProductsById')
        .resolves({ status: 200, data: mocks.getProductsByIdDB });

      await controller.getProductsById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mocks.getProductsByIdDB);
    });
    afterEach(function () {
      sinon.restore();
    });
  });
});
