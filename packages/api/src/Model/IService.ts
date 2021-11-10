interface IService<T> {
  create: (obj: T) => Promise<T>;
  findOne: (id: number) => Promise<T>;
  update: (obj: T) => Promise<T>;
  delete: (id: number) => Promise<void>;
}

export default IService;
