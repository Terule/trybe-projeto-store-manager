const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService')


const { products, insertResult, resultProducts, allResult } = require('./mocks/salesService.mock');

describe('Testa a salesService', () => {
  it('Verifica se é possível inserir uma venda', async () => {
    sinon.stub(salesModel, 'insertSaleProducts').resolves(1)
    sinon.stub(salesModel, 'getById').resolves(resultProducts)

    const sale = await salesService.insertSale(products)

    expect(sale).to.be.deep.equal(insertResult)
  });
  it('Verifica se é possível pesquisar todas as vendas', async () => {
    sinon.stub(salesModel, 'getAllSales').resolves(allResult)

    const result = await salesService.getAllSales();

    expect(result).to.be.deep.equal(allResult)
  });
  // it('', async () => { });
  // it('', async () => { });

  afterEach(sinon.restore)
})