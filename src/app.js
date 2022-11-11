const express = require('express');
const storeModel = require('./models/store.model');

const app = express();
app.use(express.json());

const HTTP_SUCCESS_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (_req, res) => {
  const [result] = await storeModel.getAllProducts();
  res.status(HTTP_SUCCESS_STATUS).json(result);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const [[result]] = await storeModel.getById(id);
  if (!result) {
    return res.status(HTTP_NOT_FOUND_STATUS).send({ message: 'Product not found' });
  }
  res.status(HTTP_SUCCESS_STATUS).json(result);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;