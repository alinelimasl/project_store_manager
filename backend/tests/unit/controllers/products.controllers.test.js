const sinon = require('sinon');
const chai = require('chai');
const SinonChai = require('sinon-chai');
const { expect } = require('chai');
const { productsServiceDb, productsServiceDbByProductId, productsServiceDbByProductIdError } = require('../mock/products.mock');
const serviceProduct = require('../../../src/services/products.service');
const controllerProduct = require('../../../src/controllers/products.controllers');

chai.use(SinonChai);

describe('Realizando testes - controller dos produtos', function () {
  it('Rota de produtos', async function () {
    sinon.stub(serviceProduct, 'getAllProducts').resolves(productsServiceDb);
    const req = { body: {}, params: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await controllerProduct.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsServiceDb.data);
  });

  it('Rota de produtos por id', async function () {
    sinon.stub(serviceProduct, 'getProductsById').resolves(productsServiceDbByProductId);
    const req = { body: {}, params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await controllerProduct.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsServiceDbByProductId.data);
  });
  
  it('Rota de produtos por id com erro', async function () {
    sinon.stub(serviceProduct, 'getProductsById').resolves(productsServiceDbByProductIdError);
    const req = { body: {}, params: { id: 5555555 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    await controllerProduct.getProductsById(req, res);
    
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(productsServiceDbByProductIdError.data);
  });

  it('Rota de cadastro de produtos', async function () {
    sinon.stub(serviceProduct, 'getCreateProduct').resolves({ status: 'CREATED', data: { id: 5, name: 'ProdutoA' } });
    const req = { body: { name: 'ProdutoA' }, params: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await controllerProduct.getCreateProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 5, name: 'ProdutoA' });
  });

  afterEach(function () {
    sinon.restore();
  });
});
