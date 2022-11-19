const salesModel = require('../models/salesModel');

const getById = async (id) => {
  const result = await salesModel.getById(id);
  return result;
};

const insertSaleProducts = async (products) => {
  const id = await salesModel.insertSaleProducts(products);
  return id;
};

const insertSale = async (products) => {
  const id = await insertSaleProducts(products);

  const result = await getById(id);

  return {
    id,
    itemsSold: result.map((item) => ({
        productId: item.productId, quantity: item.quantity,
      })),
  };
};

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

const deleteSaleById = async (id) => {
  await salesModel.deleteSaleById(id);
};

module.exports = {
  getById,
  insertSale,
  getAllSales,
  deleteSaleById,
};