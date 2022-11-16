const productService = require('../services/productsService');

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).send({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422)
    .send({ message: '"name" length must be at least 5 characters long' }); 
}
  next();
};

const idValidation = async (req, res, next) => {
  const { id } = req.params;
  const result = await productService.getById(id);
  if (!id || !result) return res.status(404).send({ message: 'Product not found' });
  next();
};

module.exports = { nameValidation, idValidation };