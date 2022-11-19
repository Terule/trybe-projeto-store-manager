const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(`INSERT INTO StoreManager.sales (date) 
  VALUE (default)`);
  return insertId;
};

const insertSaleProducts = async (products) => {
  const saleId = await insertSale();
  const placeholders = products.map((_) => '(?, ?, ?)').join(', ');
  const values = products
    .reduce((acc, { productId, quantity }) => [...acc, saleId, productId, quantity], []);
  
  await connection.execute(`INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
  VALUES ${placeholders}`, values);
  
  return saleId;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `SELECT
    S.date,
    P.product_id AS productId,
    P.quantity
    FROM StoreManager.sales_products AS P
    INNER JOIN StoreManager.sales AS S
    ON S.id = P.sale_id
    AND S.id = ?
    ORDER BY S.id, P.product_id`,
    [id],
  );
  return result;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT
    S.id AS saleId,
    S.date,
    P.product_id AS productId,
    P.quantity
    FROM StoreManager.sales_products AS P
    INNER JOIN StoreManager.sales AS S
    ON S.id = P.sale_id
    ORDER BY S.id, P.product_id`,
  );
  return result;
};

const deleteSaleById = async (id) => {
  await connection.execute(`
  DELETE FROM StoreManager.sales
  WHERE id = ?
  `, [id]);
  await connection.execute(`
  DELETE FROM StoreManager.sales_products
  WHERE sale_id = ?
  `, [id]);
}; 

module.exports = {
  insertSaleProducts,
  getById,
  getAllSales,
  deleteSaleById,
};