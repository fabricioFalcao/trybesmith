import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import usersMocks from '../../mocks/usersMocks';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /login', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return status status 200 and a token when succeeded to log in', async function () {
    // Arrange
    const mockFindOneReturn = UserModel.build(usersMocks.userFromDb);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn)

    // Act
    const httpResponse = await chai.request(app).post('/login').send(usersMocks.userLogin)

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  })
});
