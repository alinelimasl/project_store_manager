const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/products.model');
const { getAllProductsDB, getProductsByIdDB, productsServiceDb, productsServiceDbByProductId,
  productsServiceDbByProductIdError, 
} = require('../mock/products.mock');
const serviceProduct = require('../../../src/services/products.service');

describe('Realizando testes - serviço do produto', function () {
  it('Deve retornar um produto', async function () {
    sinon.stub(productModel, 'getAllProducts').resolves(getAllProductsDB);
    const products = await serviceProduct.getAllProducts();
  
    expect(products).to.be.deep.equal(productsServiceDb);
    expect(products.status).to.be.equal('SUCCESS');
    expect(products.data).to.be.an('array');
  });

  it('Recuperando o id do produto', async function () {
    sinon.stub(productModel, 'getProductsById').resolves(getProductsByIdDB);
    const product = await serviceProduct.getProductsById(1);
  
    expect(product).to.be.deep.equal(productsServiceDbByProductId);
    expect(product.status).to.be.equal('SUCCESS');
    expect(product.data).to.be.an('array');
    expect(product.data).to.have.lengthOf(1);
  });

  it('Recuperando o id do produto com erro', async function () {
    sinon.stub(productModel, 'getProductsById').resolves(undefined);
    const product = await serviceProduct.getProductsById(5555555);
  
    expect(product).to.be.deep.equal(productsServiceDbByProductIdError);
    expect(product.status).to.be.equal('NOT_FOUND');
    expect(product.data.message).to.be.equal('Product not found');
  });

  it('Recuperando ao cadastrar produto', async function () {
    sinon.stub(productModel, 'getCreateProduct').resolves(5);
    const product = await serviceProduct.getCreateProduct({ name: 'ProdutoA' });
  
    expect(product.status).to.be.deep.equal('CREATED');
    expect(product.data).to.be.deep.equal({ id: 5, name: 'ProdutoA' });
  });

  it('Recuperando ao atualizar produto', async function () {
    sinon.stub(productModel, 'getUpdateProduct').resolves({ affectedRows: 1 });
    const product = await serviceProduct.getUpdateProduct(1, 'ProdutoA');
  
    expect(product.status).to.be.deep.equal('SUCCESS');
    expect(product.data).to.be.deep.equal({ id: 1, name: 'ProdutoA' });
  });

  it('Recuperando ao atualizar produto com erro', async function () {
    sinon.stub(productModel, 'getUpdateProduct').resolves(null);
    const product = await serviceProduct.getUpdateProduct(55555, 'ProdutoALSL');
  
    expect(product.status).to.be.deep.equal('NOT_FOUND');
    expect(product.data.message).to.be.deep.equal('Product not found');
  });

  afterEach(function () {
    sinon.restore();
  });
});
