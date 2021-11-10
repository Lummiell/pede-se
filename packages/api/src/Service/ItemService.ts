import { getRepository } from 'typeorm';
import { Item } from '../Database/Entities/Item';
const itemRepository = getRepository(Item);

const ItemService = {
  find: async () => {
    const item = await itemRepository.find({ relations: ['group'] });
    return item;
  },
  findOne: async (id: string) => {
    const item = await itemRepository.findOne(id);
    return item;
  },
  create: async (obj: Item) => {
    await itemRepository.insert(obj);
    return obj;
  },
  update: async (obj: Item) => {
    await itemRepository.update(obj.itemID, obj);
    return obj;
  },
  delete: async (id: string) => {
    await itemRepository.delete(id);
  }
};

export { ItemService };
