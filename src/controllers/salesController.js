const salesService = require('../services/salesService');

const insertSale = async (req, res) => {
  const products = req.body;
  const result = await salesService.insertSale(products);

  res.status(201).json(result);
};

module.exports = {
  insertSale,
};