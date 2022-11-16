const insertDb = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 1,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
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

const idResultDb = [
  [
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
  ],
  null,
]

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
];

const allResultDB = [
  [
    {
      "saleId": 1,
      "date": "2022-11-15T13:57:23.000Z",
      "productId": 1,
      "quantity": 5
    }
  ],
  null
]

const allResult = [
  {
    "saleId": 1,
    "date": "2022-11-15T13:57:23.000Z",
    "productId": 1,
    "quantity": 5
  }
];

module.exports = {
  insertDb,
  insertResult,
  products,
  idResultDb,
  idResult,
  allResultDB,
  allResult,
};