import { Request, Response } from 'express';
import productsService from '../services/productsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const registerProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const { status, data } = await productsService.registerProduct(productData);
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  registerProduct,
};