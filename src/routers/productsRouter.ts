import { Router } from 'express';
import productsController from '../controllers/productsController';
import productValidation from '../middlewares/productValidation';

const productsRouter = Router();

productsRouter.get('/products', productsController.listProducts);
productsRouter.post('/products', productValidation, productsController.registerProduct);

export default productsRouter;