const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { products, product, insertResponse, updateResult, deleteResult, queryResult, updatedProduct } = require('./mocks/productService.mock');

describe('Testa a productService', function () {
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

  it('Verifica se é possível atualizar um produto', async () => {
    sinon.stub(productsModel, 'update').resolves(updateResult);
    sinon.stub(productsModel, 'getById').resolves(updatedProduct)

    const result = await productsService.update(1, 'teste3');

    expect(result).to.be.deep.equal(updatedProduct);
  });

  it('Verifica se é possível apagar um produto', async () => {
    sinon.stub(productsModel, 'deleteById').resolves(deleteResult);
    
    const result = await productsService.deleteById(1);

    expect(result).to.be.deep.equal(deleteResult);
  });

  it('Verrifica se é possível realizar uma query', async () => {
    sinon.stub(productsModel, 'getAllProducts').resolves(products);

    const result = await productsService.getByQuery('i');

    expect(result).to.be.deep.equal(queryResult)
  });

  afterEach(sinon.restore)
});