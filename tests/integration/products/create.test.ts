import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model'
import productMocks from '../../mocks/productMocks';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () { sinon.restore(); });
  it('should return status 201 and the new product data for a valid request', async function () {
    // Arrange
    const mockCreateReturn = ProductModel.build(productMocks.validProductFromDB);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)

    // Act
    const httpResponse = await chai.request(app).post('/products').send(productMocks.validProductRequest)

    // Assert
    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMocks.validProductFromDB)
  })
});
