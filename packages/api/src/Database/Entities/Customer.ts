import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";
// import { v4 as uuid } from "uuid";
import {ICustomer} from '../../Model/ICustomer'
@Entity()
export class Customer extends BaseEntity  implements ICustomer {
  @PrimaryColumn()
  customerID: string;
  @Column()
  name: string;
  @Column({
    nullable:true
  })
  cpf?: string;
  @Column()
  state: string;
  @Column()
  city:string;
  @Column()
  zipCode:string;
  @Column()
  address:string;
  @Column()
  number:string;
  @Column()
  phone:string;
  // constructor(customer:ICustomer) {
  //   console.log(customer)
  //   super()
  //   this.name = customer.name;
  //   this.state = customer.state;
  //   this.city= customer.city;
  //   this.zipCode= customer.zipCode;
  //   this.address=customer.address;
  //   this.number=customer.number;
  //   this.phone=customer.phone;
  //   this.city=customer.city;
  //   this.cpf=customer.cpf;
  //   this.customerID = uuid();
  // }
}
