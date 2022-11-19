const { getById } = require('../services/salesService');

const validateSaleId = async (req, res, next) => {
  const { id } = req.params;
  const result = await getById(id);
  if (!id || result.length === 0) return res.status(404).send({ message: 'Sale not found' });
  next();
};

module.exports = validateSaleId;