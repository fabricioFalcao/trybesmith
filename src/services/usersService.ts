import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/serviceResponse';

type UserResponseType = {
  username: string;
  productIds: number[] | undefined;
};

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

export default {
  listUsers,
};