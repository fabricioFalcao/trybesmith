import { Request, Response } from 'express';
import loginService from '../services/loginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const userLogin = async (req: Request, res: Response) => {
  const login = req.body;
  const { status, data } = await loginService.userLogin(login);
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  userLogin,
};