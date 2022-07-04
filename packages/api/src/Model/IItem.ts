import IItemGroup from './IItemGroup';

interface IItem {
  name: string;
  price: number;
  category?: IItemGroup;
}

export default IItem;
