import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "../../User/models/User";

@Entity("customers")
export default class Customer {
  @Column()
  user_id: string;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string;

  @Column()
  phone: string;

  @Column()
  zipcode: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  address: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  obs: string;

  @ManyToOne(() => User, (user) => user.customers)
  @JoinColumn({ name: "user_id" })
  user: User;
}
