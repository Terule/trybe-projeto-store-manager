const productService = require('../services/productsService');

const isProductIdMissing = (req, res, next) => {
  const products = req.body;
  const check = products.map((item) => {
    if (item.productId) return true;
    return false;
  }).every((item) => item);

  if (!check) return res.status(400).send({ message: '"productId" is required' });
  next();
};

const isProductIdValid = async (req, res, next) => {
  const products = req.body;
  const result = await productService.getAllProducts();
  const allProducts = result.map((item) => item.id);
  const check = products.map((item) => {
    if (allProducts.includes(item.productId)) return true;
    return false;
  }).every((item) => item);

  if (!check) return res.status(404).send({ message: 'Product not found' });
  next();
};

module.exports = {
  isProductIdMissing,
  isProductIdValid,
};