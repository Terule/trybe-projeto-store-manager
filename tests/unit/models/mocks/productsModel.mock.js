const productsDb = [
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ], null
];

const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const product = {
  "id": 1,
  "name": "Martelo de Thor"
}

const insertResponse = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 4,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
];

const updateDbResult = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 0  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  },
  null
];

const updateResult = {
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "info": "Rows matched: 1  Changed: 0  Warnings: 0",
  "serverStatus": 2,
  "warningStatus": 0,
  "changedRows": 0
}

const updatedProduct = {
  id: 1,
  name: 'teste3',
}

const deleteDbResult = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
]

const deleteResult = {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  }

module.exports = {
  productsDb,
  products,
  product,
  insertResponse,
  updateDbResult,
  updateResult,
  deleteDbResult,
  deleteResult,
  updatedProduct,
};