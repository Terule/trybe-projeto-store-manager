const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { products, product, insertResponse } = require('./mocks/productService.mock');

describe('Testa a camada service', function () {
  it('verifica se é possível listar todos os produtos', async function () {
    sinon.stub(productsModel, 'getAllProducts').resolves(products)

    const result = await productsService.getAllProducts();

    expect(result).to.be.a('array');
    expect(result).to.be.deep.equal(products);
  });

  it('verifica se é possível listar apenas 1 produto', async function () {
    sinon.stub(productsModel, 'getById').resolves(product)

    const result = await productsService.getById(1);

    expect(result).to.be.a('object');
    expect(result).to.be.deep.equal(product);
  });

  it('Verifica se é possível inserir um produto', async () => {
    const newProduct = { name: 'Tesseract' }
    
    sinon.stub(productsModel, 'insert').resolves(insertResponse)

    const result = await productsService.insert(newProduct);

    expect(result.insertId).to.be.equal(4)
  });

  afterEach(sinon.restore)
});