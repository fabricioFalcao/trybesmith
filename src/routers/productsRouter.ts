import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/products', productsController.registerProduct);

export default productsRouter;