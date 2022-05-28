import { ItemGroup } from '../Database/Entities/ItemGroup';
import { dataSource } from '../Database/ormconfig';
const itemGroupRepository = dataSource.getRepository(ItemGroup);

const ItemGroupService = {
  async create(obj: ItemGroup) {
    await itemGroupRepository.insert(obj);
    return obj;
  },
  async findOne(id: string) {
    const itemGroup = await itemGroupRepository.findOneBy({ itemGroupID: id });
    return itemGroup;
  },
  async list() {
    const itemGroups = await itemGroupRepository.find();
    return itemGroups;
  }
};

export { ItemGroupService };
