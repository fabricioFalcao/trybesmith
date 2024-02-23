import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwtTokenUtility from '../utils/jwtTokenUtility';

const userLogin = async (login: Login): Promise<ServiceResponse<Token>> => {
  const registeredUser = await UserModel.findOne({ where: { username: login.username } });

  if (!registeredUser || !bcrypt.compareSync(login.password, registeredUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { id, username } = registeredUser.dataValues;
  const token = jwtTokenUtility.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  userLogin,
};