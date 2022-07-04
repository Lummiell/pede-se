import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import IItemGroup from '../../Model/IItemGroup';
import { Item } from './Item';
@Entity('ItemCategory')
export class ItemGroup implements IItemGroup {
  @PrimaryGeneratedColumn('uuid')
  itemGroupID!: string;

  @Column()
  name!: string;

  @OneToMany(() => Item, (item) => item.group)
  items!: Item[];
}
