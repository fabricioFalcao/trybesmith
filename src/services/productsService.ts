import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/serviceResponse';

const registerProduct = async (
  productData: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(productData);

  return { status: 'CREATED', data: newProduct.dataValues };
};

export default {
  registerProduct,
};