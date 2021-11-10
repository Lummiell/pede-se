import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import IItemCategory from '../../Model/IItemCategory';
import { Item } from './Item';
@Entity('ItemCategory')
export class ItemGroup implements IItemCategory {
  @PrimaryGeneratedColumn('uuid')
  itemGroupID!: string;

  @Column()
  name!: string;

  @OneToMany(() => Item, (item) => item.group)
  items!: Item[];
}
