import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import IItem from '../../Model/IItem';
import { ItemGroup } from './ItemGroup';
@Entity('Item')
export class Item implements IItem {
  @PrimaryGeneratedColumn('uuid')
  itemID!: string;

  @Column()
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: number;

  @ManyToOne(() => ItemGroup, (group) => group.items, { nullable: true })
  group?: ItemGroup;
}
