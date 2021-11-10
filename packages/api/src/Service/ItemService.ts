import { getRepository } from 'typeorm';
import { Item } from '../Database/Entities/Item';

const ItemService = {
  find: async () => {
    const itemRepository = getRepository(Item);
    const item = await itemRepository.find({ relations: ['group'] });
    return item;
  },
  findOne: async (id: string) => {
    const itemRepository = getRepository(Item);
    const item = await itemRepository.findOne(id);
    return item;
  },
  create: async (obj: Item) => {
    const itemRepository = getRepository(Item);
    await itemRepository.insert(obj);
    return obj;
  },
  update: async (obj: Item) => {
    const itemRepository = getRepository(Item);
    await itemRepository.update(obj.itemID, obj);
    return obj;
  },
  delete: async (id: string) => {
    const itemRepository = getRepository(Item);
    await itemRepository.delete(id);
  }
};

export { ItemService };
