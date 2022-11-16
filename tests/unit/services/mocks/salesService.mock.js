const products = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const resultProducts = [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 1,
    "productId": 2,
    "quantity": 5
  }
];

const insertResult = {
  "id": 1,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
};

const allResult = [
  {
    "saleId": 1,
    "date": "2022-11-15T13:57:23.000Z",
    "productId": 1,
    "quantity": 5
  }
];

module.exports = {
  products,
  insertResult,
  resultProducts,
  allResult
}