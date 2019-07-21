import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar', { length: 255 }) public firstName: string;

  @Column('varchar', { length: 255 }) public lastName: string;

  @Column('varchar', { length: 255 }) public email: string;

  @Column('text') public password: string;
}
