import { expect } from 'chai';
import Sinon from 'sinon';
import request from 'supertest';
import { app } from '../../src/app';
import { Item } from '../../src/Database/Entities/Item';
import { ItemService } from '../../src/Service/ItemService';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';
import { ItemGroupService } from '../../src/Service/ItemGroupService';
const itemPath = '/item';
const sandbox = Sinon.createSandbox();

const singleNewItem = new Item();
singleNewItem.name = faker.commerce.productName();
singleNewItem.price = Number(faker.commerce.price());

const singleItem = new Item();
singleItem.itemID = faker.random.alphaNumeric(10);
singleItem.name = faker.commerce.productName();
singleItem.price = Number(faker.commerce.price());

const manyItems: Item[] = [
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
      const findStub = sandbox.stub(ItemService, 'find').resolves(manyItems);
      const res = await request(app).get(itemPath);
      expect(findStub.calledOnce).to.be.true;
      expect(res.status).to.equal(200);
      expect(res.body)
        .to.be.a('array')
        .and.have.length(manyItems.length)
        .and.have.deep.members(manyItems);
    });
  });
  context(`GET ${itemPath}/{id}`, () => {
    it('Gets the specified item', async () => {
      const findOneStub = sandbox
        .stub(ItemService, 'findOne')
        .withArgs(singleItem.itemID)
        .resolves(singleItem);
      const route = `${itemPath}/${singleItem.itemID}`;
      const res = await request(app).get(route);
      expect(res.status).to.equal(200);
      expect(res.body).to.be.deep.equal(singleItem);
      expect(findOneStub.calledOnceWith(singleItem.itemID)).to.be.true;
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
  context(`POST ${itemPath}`, () => {
    it('Returns the inserted item with its ID', async () => {
      const testID = faker.random.alphaNumeric(10);
      const stub = sandbox
        .stub(ItemService, 'create')
        .withArgs(singleNewItem)
        .resolves({ ...singleNewItem, itemID: testID });
      const res = await request(app).post(`${itemPath}`).send(singleNewItem);
      expect(stub.calledOnceWith(singleNewItem)).to.be.true;
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('itemID', testID);
    });
    context(
      'Request fails and returns an error if invalid properties are given',
      () => {
        context('Invalid Base Properties', () => {
          async function invalidBasePropertiesInsertTest(item: any) {
            const stub = sandbox.stub(ItemService, 'create').resolves();
            const res = await request(app).post(`${itemPath}`).send(item);
            expect(stub.notCalled).to.be.true;
            expect(res.status).to.equal(422);
            expect(res.body).to.have.property('errors');
          }
          it('Fails with invalid price', () => {
            const invalidItem = {
              price: faker.random.alpha(3),
              name: faker.commerce.productName()
            };
            return invalidBasePropertiesInsertTest(invalidItem);
          });
          it('Fails with empty price', async () => {
            const invalidItem = { name: faker.commerce.productName() };
            return invalidBasePropertiesInsertTest(invalidItem);
          });
          it('Fails with empty name', async () => {
            const invalidItem = { price: Number(faker.commerce.price()) };
            return invalidBasePropertiesInsertTest(invalidItem);
          });
          it('Fails with empty item', async () => {
            return invalidBasePropertiesInsertTest({});
          });
          it('Fails with invalid Item group ID', () => {
            const invalidItem = {
              price: Number(faker.commerce.price()),
              name: faker.commerce.productName(),
              itemGroupID: faker.random.alphaNumeric()
            };
            return invalidBasePropertiesInsertTest(invalidItem);
          });
        });
        context('Invalid relational properties', () => {
          it('Fails with inexistent Item group ID', () => {
            const asyncTest = async () => {
              const item = {
                price: Number(faker.commerce.price()),
                name: faker.commerce.productName(),
                itemGroupID: v4()
              };
              const itemGroupStub = sandbox
                .stub(ItemGroupService, 'findOne')
                .withArgs(item.itemGroupID)
                .resolves(null);
              const itemStub = sandbox.stub(ItemService, 'create').resolves();
              const res = await request(app).post(`${itemPath}`).send(item);
              expect(itemGroupStub.calledWith(item.itemGroupID)).to.be.true;
              expect(itemStub.notCalled).to.be.true;
              expect(res.status).to.equal(409);
              expect(res.body).to.have.property('error');
            };
            return asyncTest();
          });
        });
      }
    );
  });
});
