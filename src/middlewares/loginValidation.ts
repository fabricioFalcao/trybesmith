import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(mapStatusHTTP('BAD_REQUEST'))
      .json({ message: '"username" and "password" are required' });
  }
  next();
};

export default loginValidation;