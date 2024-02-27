import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import usersMocks from '../../mocks/usersMocks';
import { User } from '../../../src/types/User';
import UserModel from '../../../src/database/models/user.model';
import productMocks from '../../mocks/productMocks';
import ProductModel from '../../../src/database/models/product.model';
import { Product } from '../../../src/types/Product';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /users', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return status 200 and the list of all users with their items ids from database', async function () {
    // Arrange


    // const mockedProductsList: Product[] = productMocks.productListFromDb
    // const mockFindAllProductsReturn = ProductModel.bulkBuild(mockedProductsList);
    // sinon.stub(ProductModel, 'findAll').resolves(mockFindAllProductsReturn);

    const mockedUsersList = usersMocks.usersWithProductIds
    const mockFindAllUsersReturn = UserModel.bulkBuild(mockedUsersList as any, { include: { model: ProductModel, as: 'productIds', attributes: ['id'] } })
    sinon.stub(UserModel, 'findAll').resolves(mockFindAllUsersReturn)

    // sinon.stub(UserModel, 'findAll').resolves(usersMocks.usersWithProductIds as any)
    // const xablau = UserModel.build({ username: 'Fabricio', level: 30, password: '1234', vocation: 'seila', id: 5 })
    // xablau.

    // Act
    const httpResponse = await chai.request(app).get('/users')

    // Assert
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(usersMocks.usersResponseList)

  })
});
