import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Customer from "../../Customer/models/Customer";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Customer, (customer) => customer.user, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "user_id" })
  customers: Customer[];
}
