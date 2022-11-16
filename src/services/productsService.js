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
  const result = await productsModel.insert({ name });
  
  return result;
};

const update = async (id, name) => {
  const result = await productsModel.update(id, name);
  return result;
};

module.exports = {
  getAllProducts,
  getById,
  insert,
  update,
};