const { expect } = require('chai');
const sinon = require('sinon');
const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const { salesFromDb, 
  salesServiceDb, 
  salesByProductId, 
  salesServiceDbByProductId,
  salesServiceDbByProductIdError } = require('../mock/sales.mock');

describe('Realizando testes - service de sales', function () {
  it('Recuperando sales com sucesso', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(salesFromDb);
    const sales = await salesService.getAllSales();

    expect(sales).to.be.deep.equal(salesServiceDb);
    expect(sales.status).to.be.equal('SUCCESS');
    expect(sales.data).to.be.an('array');
  });

  it('Recuperando sales por id com sucesso', async function () {
    sinon.stub(salesModel, 'getSaleById').resolves(salesByProductId);
    const sales = await salesService.getSaleById(1);

    expect(sales).to.be.deep.equal(salesServiceDbByProductId);
    expect(sales.status).to.be.equal('SUCCESS');
    expect(sales.data).to.be.an('array');
    expect(sales.data).to.have.lengthOf(2);
  });
  
  it('Recuperando sales por id com erro', async function () {
    sinon.stub(salesModel, 'getSaleById').resolves([]);
    const sales = await salesService.getSaleById(5555555);

    expect(sales).to.be.deep.equal(salesServiceDbByProductIdError);
    expect(sales.status).to.be.equal('NOT_FOUND');       
    expect(sales.data.message).to.be.equal('Sale not found');
  });

  it('Teste ao inserir sales ', async function () {
    sinon.stub(salesModel, 'createSale').resolves({ id: 6, itemsSold: [{ productId: 1, quantity: 1 }] });
    const sales = await salesService.createSale([{ productId: 1, quantity: 1 }]);

    expect(sales.status).to.be.deep.equal('CREATED');
    expect(sales.data).to.be.deep.equal({ id: 6, itemsSold: [{ productId: 1, quantity: 1 }] });
  });

  afterEach(function () {
    sinon.restore();
  });
});