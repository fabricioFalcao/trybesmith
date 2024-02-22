import { ProductInputtableTypes } from "../../src/database/models/product.model";
import { Product } from "../../src/types/Product";

const validProductRequest: ProductInputtableTypes = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  userId: 1
}

const validProductFromDB: Product = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  userId: 1
}

const productListFromDb: Product[] = [
  {
    id: 1,
    name: "Excalibur",
    price: "10 peças de ouro",
    userId: 1,
  },
  {
    id: 2,
    name: "Espada Justiceira",
    price: "20 peças de ouro",
    userId: 1,
  },
  {
    id: 3,
    name: "Lira de Orfeu",
    price: "1 peça de ouro",
    userId: 2,
  },
  {
    id: 4,
    name: "Armadura de Aquiles",
    price: "1 peça de ouro",
    userId: 2,
  },
  {
    id: 5,
    name: "Harpa de Dagda",
    price: "15 peças de ouro",
    userId: 3,
  },
  {
    id: 6,
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    userId: 1,
  },
];

export default {
  validProductFromDB,
  validProductRequest,
  productListFromDb
}