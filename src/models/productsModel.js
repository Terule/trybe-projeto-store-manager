const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return result;
};

const getById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return result;
};

const insert = async ({ name }) => {
  const [result] = await connection.execute(
    `INSERT INTO StoreManager.products(name) VALUES
    (?)`,
    [name],
  );
  return result;
};

const update = async (id, name) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.products SET name = ?
    WHERE id = ?`,
    [name, id],
  );
  return result;
};

const deleteById = async (id) => {
  const [result] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ?`,
    [id],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getById,
  insert,
  update,
  deleteById,
};