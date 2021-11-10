import { getRepository } from 'typeorm';
import { ItemGroup } from '../Database/Entities/ItemGroup';
const itemGroupRepository = getRepository(ItemGroup);

const ItemGroupService = {
  async create(obj: ItemGroup) {
    await itemGroupRepository.insert(obj);
    return obj;
  },
  async findOne(id: string) {
    const itemGroup = await itemGroupRepository.findOne(id);
    return itemGroup;
  },
  async list() {
    const itemGroups = await itemGroupRepository.find();
    return itemGroups;
  }
};

export { ItemGroupService };
