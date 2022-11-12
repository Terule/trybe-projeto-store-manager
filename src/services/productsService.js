const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const result = await productsModel.getAllProducts();
  return result;
};

const getById = async (id) => {
  const result = await productsModel.getById(id);
  return result;
};

const insert = async ({ name }) => {
  const { insertId } = await productsModel.insert({ name });
  const result = await productsModel.getById(insertId);

  return result;
};

module.exports = {
  getAllProducts,
  getById,
  insert,
};