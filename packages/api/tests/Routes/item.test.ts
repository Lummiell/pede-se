import { expect } from 'chai';
import Sinon from 'sinon';
import request from 'supertest';
import { app } from '../../src/app';
import { Item } from '../../src/Database/Entities/Item';
import { ItemService } from '../../src/Service/ItemService';
import { faker } from '@faker-js/faker';
const itemPath = '/item';
const sandbox = Sinon.createSandbox();
const items: Item[] = [
  { itemID: '1', name: faker.commerce.productName(), price: 1 },
  {
    itemID: '2',
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    group: {
      itemGroupID: '1',
      name: faker.commerce.productAdjective(),
      items: []
    }
  }
];
describe('Item Requests', () => {
  afterEach(() => {
    sandbox.restore();
  });
  context(`GET ${itemPath}`, () => {
    it('Gets all items', async () => {
      const findStub = sandbox.stub(ItemService, 'find').resolves(items);
      const res = await request(app).get(itemPath);
      expect(findStub.calledOnce).to.be.true;
      expect(res.status).to.equal(200);
      expect(res.body).to.be.a('array').and.have.length(items.length);
      expect(res.body[0]).to.exist.and.deep.equal(items[0]);
    });
  });
  context(`GET ${itemPath}/{id}`, () => {
    it('Gets the specified item', async () => {
      const findOneStub = sandbox
        .stub(ItemService, 'findOne')
        .withArgs(`${items[0].itemID}`)
        .resolves(items[0]);
      const res = await request(app).get(`${itemPath}/${items[0].itemID}`);
      expect(findOneStub.calledOnceWith(`${items[0].itemID}`)).to.be.true;
      expect(res.status).to.equal(200);
      expect(res.body).to.be.deep.equal(items[0]);
    });
    it("Returns 404 when the ID doesn't exist", async () => {
      const testID = faker.random.alphaNumeric(10);
      const findOneStub = sandbox
        .stub(ItemService, 'findOne')
        .withArgs(testID)
        .resolves(undefined);
      const res = await request(app).get(`${itemPath}/${testID}`);
      expect(findOneStub.calledOnceWith(testID)).to.be.true;
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('error', 'ItemNotFound');
    });
  });
});
