import { Request, Response } from 'express';
import usersService from '../services/usersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const listUsers = async (_req: Request, res: Response) => {
  const { status, data } = await usersService.listUsers();
  return res.status(mapStatusHTTP(status)).json(data);
};
export default {
  listUsers,
};