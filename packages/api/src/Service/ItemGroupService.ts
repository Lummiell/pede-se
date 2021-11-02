import { getRepository, Repository } from "typeorm";
import { ItemGroup } from "../Database/Entities/ItemGroup";

const ItemGroupService = {
  async create(obj: ItemGroup) {
    const itemGroupRepository = getRepository(ItemGroup);
    await itemGroupRepository.insert(obj);
    return obj;
  },
  async findOne(id: string) {
    const itemGroupRepository = getRepository(ItemGroup);
    const itemGroup = await itemGroupRepository.findOne(id);
    return itemGroup;
  },
  async list() {
    const itemGroupRepository = getRepository(ItemGroup);
    const itemGroups = await itemGroupRepository.find();
    return itemGroups;
  },
};

export { ItemGroupService };
