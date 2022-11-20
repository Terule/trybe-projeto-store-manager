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

const insertResponse = {
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 4,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0
};

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

const deleteResult = {
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0
}

const queryResult = [
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

module.exports = {
  products,
  product,
  insertResponse,
  updateResult,
  deleteResult,
  queryResult,
  updatedProduct,
};