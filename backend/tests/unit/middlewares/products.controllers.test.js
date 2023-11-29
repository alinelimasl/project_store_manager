const sinon = require('sinon');
const { expect } = require('chai');
const validateProducts = require('../../../src/middlewares/products.middleware');

describe('Realiza testes do middleware de autenticação de produtos', function () {
  it('Testa as validações', function () {
    const req = { body: { name: 'Product123' } };
    const res = { status: sinon.stub(), json: sinon.stub() };
    const next = sinon.stub();
    
    validateProducts(req, res, next);

    expect(next).to.have.been.calledWith();
    expect(res.status).to.not.have.been.calledWith();
    expect(res.json).to.not.have.been.calledWith();
  });
});