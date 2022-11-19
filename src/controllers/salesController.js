const salesService = require('../services/salesService');

const insertSale = async (req, res) => {
  const products = req.body;
  const result = await salesService.insertSale(products);

  res.status(201).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getById(id);

  if (result.length === 0) return res.status(404).send({ message: 'Sale not found' });
  res.status(200).json(result);
};

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();

  res.status(200).json(result);
};

const deleteSaleById = async (req, res) => {
  const { id } = req.params;
  await salesService.deleteSaleById(id);
  res.status(204).end();
};

const updateSaleById = async (req, res) => {
  const { params: { id }, body: products } = req;
  const result = await salesService.updateSaleById(id, products);
  res.status(200).json(result);
};

module.exports = {
  insertSale,
  getById,
  getAllSales,
  deleteSaleById,
  updateSaleById,
};