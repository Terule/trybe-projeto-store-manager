const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { products, product } = require('./mocks/productService.mock');

describe('Testa a camada service', function () {
  console.log(productsService);
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
});