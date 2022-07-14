import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    nullable: true,
  })
  firstName: string;

  @Column({
    nullable: true,
  })
  lastName: string;

  @Column({ nullable: false, select: false })
  password: string;
}
