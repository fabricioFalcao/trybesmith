import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/login', loginValidation, loginController.userLogin);

export default loginRouter;