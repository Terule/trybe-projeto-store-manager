const chai = require('chai')
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai)

const { getAllProducts, getById } = require('../../../src/controllers/productsControler');
const productService = require('../../../src/services/productsService');

const {products, product} = require('./mocks/productsControllers.mock')

describe('Validando a camada controller', function () {
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

  // it('Verifica se é exibido erro quando o ID é inválido', async function () {
  //     sinon.stub(productService, 'getById').resolves(undefined)
  //   const req = { params: { id: 6 } }
  //   const res = {}
  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   await getById(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   // expect(res.json).to.have.been.calledWith(product)
  //   });
  
  this.afterEach(sinon.restore)
});