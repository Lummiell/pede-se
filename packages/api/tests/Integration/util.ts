import { dataSource } from '../../src/Database/ormconfig';
export const getEntities = async () => {
  const entities = dataSource.entityMetadatas.map((x) => {
    return { name: x.name, table: x.tableName };
  });
  return entities;
};

export const setupConnection = async () => {
  await dataSource.initialize();
};

export const dropConnection = async () => {
  await dataSource.dropDatabase();
  await dataSource.destroy();
};

export const cleanAllEntities = async () => {
  const entities = await getEntities();
  for (const entity of entities) {
    const repository = dataSource.getRepository(entity.name);
    await repository.clear();
  }
};
