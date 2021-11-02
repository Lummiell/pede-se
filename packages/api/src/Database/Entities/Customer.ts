import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ICustomer } from "../../Model/ICustomer";
@Entity("Customer")
export class Customer implements ICustomer {
  @PrimaryGeneratedColumn("uuid")
  customerID!: string;
  @Column()
  name!: string;
  @Column({
    nullable: true,
  })
  cpf?: string;
  @Column()
  state!: string;
  @Column()
  city!: string;
  @Column()
  zipCode!: string;
  @Column()
  address!: string;
  @Column()
  number!: string;
  @Column()
  phone!: string;
}
