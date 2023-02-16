import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
  name: "users",
})
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  username: string

  @Column()
  password: string
}
