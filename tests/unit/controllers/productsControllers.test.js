const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai)

const { getAllProducts, getById, insertProduct, updateProduct } = require('../../../src/controllers/productsControler');
const productService = require('../../../src/services/productsService');

const {products, product, insertResponse, updateResult} = require('./mocks/productsControllers.mock')

describe('Testa a productController', function () {
  it('Verifica se é possivel recuperar todos os produtos', async function () {
    sinon.stub(productService, 'getAllProducts').resolves(products)

    const req = {}
    const res = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products)
  });

  it('Verifica se é possivel recuperar um produto pelo ID', async function () {
    sinon.stub(productService, 'getById').resolves(product)

    const req = { params: { id: 1 } }
    const res = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(product)
  });

  it('Verifica se é exibido erro quando o ID é inválido', async function () {
    sinon.stub(productService, 'getById').resolves(undefined)
    const req = { params: { id: 6 } }
    const res = {}
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns({ message: 'Product not found' });

    await getById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.send).to.have.been.calledWith({ message: 'Product not found' })
  });
  
  it('Verifica se é possivel inserir um novo produto', async function () {
    const newProduct = { name: 'Tesseract' };
    const response = { id: 4, name: 'Tesseract' };
    sinon.stub(productService, 'insert').resolves(insertResponse);
    sinon.stub(productService, 'getById').resolves(response);
    const req = { body: newProduct };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(response);
  });

  it('Verifica se é possível atualizar um produto', async () => {
    sinon.stub(productService, 'update').resolves(updateResult);

    const req = { params: { id: 1 }, body: { name: 'teste3' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updateResult)
  });
  
  afterEach(sinon.restore)
});