import IItemCategory from "./IItemCategory";

interface IItem {
  name: string;
  price: number;
  category?: IItemCategory;
}

export default IItem;
