const sinon = require('sinon');
const chai = require('chai');
const SinonChai = require('sinon-chai');
const { expect } = require('chai');
const { salesServiceDb, salesServiceDbByProductId, salesServiceDbByProductIdError } = require('../mock/sales.mock');
const serviceSales = require('../../../src/services/sales.service');
const controllerSale = require('../../../src/controllers/sales.controllers');

chai.use(SinonChai);

describe('Realizando testes - controller das sales', function () {
  it('Rota de sales', async function () {
    sinon.stub(serviceSales, 'getAllSales').resolves(salesServiceDb);
    const req = { body: {}, params: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await controllerSale.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesServiceDb.data);
  });

  it('Rota de sales por id', async function () {
    sinon.stub(serviceSales, 'getSaleById').resolves(salesServiceDbByProductId);
    const req = { body: {}, params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await controllerSale.getSaleById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesServiceDbByProductId.data);
  });
  it('Rota de sales por id com erro', async function () {
    sinon.stub(serviceSales, 'getSaleById').resolves(salesServiceDbByProductIdError);
    const req = { body: {}, params: { id: 5555555 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await controllerSale.getSaleById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(salesServiceDbByProductIdError.data);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
