const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');

const { productsDb, products, product } = require('./mocks/productsModel.mock');

describe('Testes de unidade do model de produtos', () => {
  it('Verifica se é possível buscar todos os produtos utilizando o model de produtos', async () => {
    sinon.stub(connection, 'execute').resolves(productsDb);

    
    const result = await productsModel.getAllProducts();

    expect(result).to.deep.equal(products);
  });

  it('Verifica se é possível buscar um produto pelo id', async () => {
    sinon.stub(connection, 'execute').resolves(productsDb);

    const result = await productsModel.getById(1);

    expect(result).to.deep.equal(product);
  });
  
  afterEach(sinon.restore)
});