const express = require('express');
const { getAllProducts, getById, insertProduct } = require('./controllers/productsControler');
const nameValidation = require('./middlewares/nameValidation');
const { isProductIdMissing, isProductIdValid } = require('./middlewares/productIdValidation'); 
const { isQuantityMissing, isQuantityValid } = require('./middlewares/quantityValidation');

const { insertSale } = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', getAllProducts);

app.get('/products/:id', getById);

app.post('/products', nameValidation, insertProduct);

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