const isQuantityMissing = (req, res, next) => {
  const products = req.body;
  const check = products.map((item) => {
    if (item.quantity || item.quantity === 0) return true;
    return false;
  }).every((item) => item);

  if (!check) return res.status(400).send({ message: '"quantity" is required' });
  next();
};

const isQuantityValid = (req, res, next) => {
  const products = req.body;
  const check = products.map((item) => {
    if (item.quantity >= 1) return true;
    return false;
  }).every((item) => item);

  if (!check) {
    return res.status(422)
      .send({ message: '"quantity" must be greater than or equal to 1' }); 
  }
  next();
};

module.exports = { 
  isQuantityMissing,
  isQuantityValid,
};