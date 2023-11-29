const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const modelSale = require('../../../src/models/sales.model');
const { salesFromDb, salesByProductId } = require('../mock/sales.mock');

describe('Realizando testes - model de sales', function () {
  it('Recuperando sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesFromDb]);
    const sales = await modelSale.getAllSales();

    expect(sales).to.be.an('array');
    expect(sales).to.have.lengthOf(2);
    expect(sales).to.be.deep.equal(salesFromDb);
  });

  it('Recuperando sales por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([salesByProductId]);
    const sales = await modelSale.getSaleById(1);

    expect(sales).to.be.an('array');
    expect(sales).to.have.lengthOf(2);
    expect(sales).to.be.deep.equal(salesByProductId);
  });
  
  it('Erro ao recuperar sales por id', async function () {
    sinon.stub(connection, 'execute').resolves([]);
    const sales = await modelSale.getSaleById(555555555);

    expect(sales).to.be.an('undefined');
  });

  it('Teste ao inserir sales ', async function () {
    sinon.stub(connection, 'execute').resolves([[
      { id: 5,
        itemsSold: { productId: 1, quantity: 1 },
      },
    ]]);

    const sales = await modelSale.createSale([{ productId: 1, quantity: 1 }]);

    const expected = { id: 6, itemsSold: [{ productId: 1, quantity: 1 }] };

    expect(sales).to.be.an('object');
    expect(sales).to.be.deep.equal(expected);
  });

  afterEach(function () {
    sinon.restore();
  });
});