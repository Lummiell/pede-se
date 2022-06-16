import { expect } from 'chai';
import { faker } from '@faker-js/faker';
import { ItemService } from '../../../src/Service/ItemService';
import { cleanAllEntities } from '../util';
import { Item } from '../../../src/Database/Entities/Item';

describe('ItemService tests', () => {
  afterEach(() => {
    cleanAllEntities();
  });
  context('CRUD', () => {
    it('Should insert items', () => {
      const tests = async () => {
        const numberOfInserts = 2;
        const TestItems: Item[] = [];
        for (let index = 0; index < numberOfInserts; index++) {
          const item = new Item();
          item.name = faker.commerce.productName();
          item.price = Number(faker.commerce.price());
          TestItems.push(item);
        }
        for (const item of TestItems) {
          await ItemService.create(item);
        }
        const returnedItems = await ItemService.find();

        expect(returnedItems).to.be.an('array').with.length(numberOfInserts);
        for (const i of returnedItems) {
          expect(i.itemID).to.be.a('string');
        }
        // Services' insert methods will be modified to return the inserted entities, so the below step won't be needed
        const comparableItems = returnedItems.map(
          (item): Item => ({
            itemID: item.itemID,
            name: item.name,
            price: Number(item.price)
          })
        );

        expect(comparableItems).to.have.same.deep.members(TestItems);
      };
      return tests();
    });
  });
});
