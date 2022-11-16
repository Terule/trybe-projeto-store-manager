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

const idResult = [
  {
    "date": "2022-11-15T13:57:23.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-11-15T13:57:23.000Z",
    "productId": 2,
    "quantity": 10
  }
]

module.exports = {
  insertResult,
  allResult,
  idResult
}