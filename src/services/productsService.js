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

const deleteById = async (id) => {
  const result = await productsModel.deleteById(id);
  return result;
};

const getByQuery = async (query) => {
  const result = await productsModel.getAllProducts();

  return result.filter((item) => item.name.includes(query));
}; 

module.exports = {
  getAllProducts,
  getById,
  insert,
  update,
  deleteById,
  getByQuery,
};