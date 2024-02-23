import { NextFunction, Request, Response } from 'express';
import joiSchema from '../utils/joiSchema';
import mapFieldValidation from '../utils/mapFiledValidation';
import usersService from '../services/usersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const productValidation = async (req: Request, res: Response, next: NextFunction) => {
  const productData = req.body;

  const { error } = joiSchema.productSchema.validate(productData);
  if (error) return res.status(mapFieldValidation(error)).json({ message: error.message });

  const { status } = await usersService.findUserById(productData.userId);
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json({ message: '"userId" not found' });
  }

  next();
};

export default productValidation;