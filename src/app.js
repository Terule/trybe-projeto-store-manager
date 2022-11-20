const express = require('express');

const { nameValidation, idValidation } = require('./middlewares/nameValidation');
const { isProductIdMissing, isProductIdValid } = require('./middlewares/productIdValidation'); 
const { isQuantityMissing, isQuantityValid } = require('./middlewares/quantityValidation');

const {
  getAllProducts,
  getById: getProductById,
  insertProduct,
  updateProduct,
  deleteById,
  getByQuery,
} = require('./controllers/productsControler');

const {
  insertSale,
  getById: getSaleById,
  getAllSales,
  deleteSaleById,
  updateSaleById,
} = require('./controllers/salesController');

const validateSaleId = require('./middlewares/salesValidation');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/search', getByQuery);

app.get('/products', getAllProducts);

app.get('/products/:id', getProductById);

app.put('/products/:id', nameValidation, idValidation, updateProduct);

app.delete('/products/:id', idValidation, deleteById);

app.post('/products', nameValidation, insertProduct);

app.get('/sales', getAllSales);

app.get('/sales/:id', getSaleById);

app.put('/sales/:id',
  validateSaleId,
  isProductIdMissing,
  isProductIdValid,
  isQuantityMissing,
  isQuantityValid,
  updateSaleById);

app.delete('/sales/:id', validateSaleId, deleteSaleById);

app.post('/sales',
  isProductIdMissing,
  isProductIdValid,
  isQuantityMissing,
  isQuantityValid,
  insertSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;