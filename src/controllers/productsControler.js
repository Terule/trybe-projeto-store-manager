const productService = require('../services/productsService');

const HTTP_SUCCESS_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const getAllProducts = async (_req, res) => {
  const result = await productService.getAllProducts();
  res.status(HTTP_SUCCESS_STATUS).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productService.getById(id);
  if (!result) {
    return res.status(HTTP_NOT_FOUND_STATUS).send({ message: 'Product not found' });
  }
  res.status(HTTP_SUCCESS_STATUS).json(result);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const response = await productService.insert({ name });
  const result = await productService.getById(response.insertId);
  res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { params: { id }, body: { name } } = req;

  const result = await productService.update(id, name);

  res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getById,
  insertProduct,
  updateProduct,
};