const sinon = require('sinon');
const chai = require('chai');
const SinonChai = require('sinon-chai');
const { expect } = require('chai');
const mocks = require('../mock/products.mock');
const serviceProduct = require('../../../src/services/products.service');
const controllerProduct = require('../../../src/controllers/products.controllers');

chai.use(SinonChai);

describe('Realizando testes - controller dos produtos', function () {
  describe('Testando o controller de produtos', function () {
    sinon.stub(serviceProduct, 'getAllProducts').resolves({ status: 404, data: mocks.getAllProductsDB });
    it('Rota de produto', async function () {
      const req = {};
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await controllerProduct.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWith(mocks.getAllProductsDB);
    });

    // it('Testa produto com id', async function () {
    //   const req = { params: { id: 1 } };
    //   const res = {
    //     status: sinon.stub().returnsThis(),
    //     json: sinon.stub(),
    //   };

    //   sinon.stub(serviceProduct, 'getProductsById').resolves({ status: 200, data: mocks.getProductsByIdDB });

    //   await controllerProduct.getProductsById(req, res);

    //   expect(res.status).to.have.been.calledWith(200);
    //   expect(res.json).to.have.been.calledWith(mocks.getProductsByIdDB);
    // });
    afterEach(function () {
      sinon.restore();
    });
  });
});
