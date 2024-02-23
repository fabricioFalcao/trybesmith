import ProductModel from '../database/models/product.model';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { UserResponseType } from '../types/User';
import { ServiceResponse } from '../types/ServiceResponse';

const listUsers = async (): Promise<ServiceResponse<UserResponseType[]>> => {
  const userResponse = await UserModel.findAll({
    attributes: ['username'],
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const usersList = userResponse.map((user) => user.dataValues);

  const formattedUserList = usersList.map((user) => ({
    username: user.username,
    productIds: user.productIds?.map((product) => product.id),

  }));

  return { status: 'SUCCESSFUL', data: formattedUserList };
};

const findUserById = async (userId: number): Promise<ServiceResponse<UserSequelizeModel>> => {
  const user = await UserModel.findByPk(userId);

  if (!user) return { status: 'INVALID_VALUE', data: { message: 'Invalid user' } };

  return { status: 'SUCCESSFUL', data: user };
};

export default {
  listUsers,
  findUserById,
};