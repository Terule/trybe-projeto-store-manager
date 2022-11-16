const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');

const { productsDb, products, product, insertResponse } = require('./mocks/productsModel.mock');

describe('Testa a productModel', () => {
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

  it('Verifica se é possivel inserir um produto', async () => {
    const newProduct = { name: 'Tesseract' }
    
    sinon.stub(connection, 'execute').resolves(insertResponse);

    const result = await productsModel.insert(newProduct);

    expect(result.insertId).to.be.equal(4);
    expect(result.affectedRows).to.be.equal(1);
  })
  
  afterEach(sinon.restore)
});