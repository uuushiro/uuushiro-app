import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  firstName: string;

  @Column({ length: 16 })
  lastName: string;

  @Column({ length: 128 })
  password: string;
}