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

export default {
  validProductFromDB,
  validProductRequest
}