import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';
import productMocks from '../../mocks/productMocks';
import { Product } from '../../../src/types/Product';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return status 200 and the list of all products from database', async function () {
    // Arrange
    const mockedList: Product[] = productMocks.productListFromDb
    // const mockFindAllReturn = mockedList.map((product) => ProductModel.build(product))
    const mockFindAllReturn = ProductModel.bulkBuild(mockedList)
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn)

    // Act
    const httpResponse = await chai.request(app).get('/products')

    // Assert
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(mockedList)
  })
});
