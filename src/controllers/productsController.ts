import { Request, Response } from 'express';
import productsService from '../services/productsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const registerProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const { status, data } = await productsService.registerProduct(productData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const listProducts = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.listProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  registerProduct,
  listProducts,
};