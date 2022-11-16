const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');

const {
  insertDb,
  idResultDb,
  products,
  idResult,
  allResultDB,
  allResult,
} = require('./mocks/salesModel.mock');

describe('Testa a serviceModel', () => {
  it('Verifica se é possível inserir uma venda', async () => {
    sinon.stub(connection, 'execute').resolves(insertDb)

    const id = await salesModel.insertSaleProducts(products);

    expect(id).to.be.equal(1);
  });
  it('Verifica se é possível pesquisar uma venda pelo ID', async () => {
    sinon.stub(connection, 'execute').resolves(idResultDb);

    const result = await salesModel.getById(1);

    expect(result).to.be.deep.equal(idResult)
  });
  it('Verifica se é possível pesquisar todas as vendas', async () => {
    sinon.stub(connection, 'execute').resolves(allResultDB);

    const result = await salesModel.getAllSales();

    expect(result).to.be.deep.equal(allResult)
  });
  // it('', () => {});
  // it('', () => {});
  // it('', () => {});
  afterEach(sinon.restore)
});