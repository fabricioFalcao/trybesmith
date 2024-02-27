import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const registerProduct = async (
  productData: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(productData);

  return { status: 'CREATED', data: newProduct as unknown as Product };
};

const listProducts = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const productsList = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: productsList };
};

export default {
  registerProduct,
  listProducts,
};