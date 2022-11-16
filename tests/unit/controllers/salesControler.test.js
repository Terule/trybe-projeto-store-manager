const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../src/services/salesService')
const salesController = require('../../../src/controllers/salesController')

const { insertResult, idResult, allResult } = require('./mocks/salesController.mock')

describe('Testa a salesController', () => {
  it('Verifica se é possível inserir uma venda', async () => {
    sinon.stub(salesService, 'insertSale').resolves(insertResult);

    const req = {
      body: [
      {
        productId: 1,
        quantity: 1
      },
      {
        productId: 2,
        quantity: 5
      }
    ]};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesController.insertSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(insertResult);
  });

  it('Verifica se é possível pesquisar uma venda pelo ID', async () => {
    sinon.stub(salesService, 'getById').resolves(idResult);

    const req = { params: { id: 1 } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(idResult)
  });

  it('Verifica se restorna erro ao pesquisar por um ID inválido', async () => {
    sinon.stub(salesService, 'getById').resolves([]);

    const req = { params: { id: 20 } }
    const res = {}

    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns({ message: 'Sale not found' });

    await salesController.getById(req, res);

    expect(res.status).to.have.been.calledWith(404)
    expect(res.send).to.have.been.calledWith({ message: 'Sale not found' })
  });

  it('Verifica se é possível pesquisar todas as vendas', async () => {
    sinon.stub(salesService, 'getAllSales').resolves(allResult);

    const req = {}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesController.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(allResult)
  });

  afterEach(sinon.restore);
})