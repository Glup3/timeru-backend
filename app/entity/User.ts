import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry';
import UserPermission from './UserPermission';

@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('int', { default: 0 }) public count: number;

  @Column('varchar', { length: 255 }) public username: string;

  @Column('varchar', { length: 255 }) public firstName: string;

  @Column('varchar', { length: 255 }) public lastName: string;

  @Column('varchar', { length: 255 }) public email: string;

  @Column('varchar', { length: 255, default: 'USER' }) public role: string;

  @Column('boolean', { default: true }) public active: boolean;

  @Column('text') public password: string;

  @OneToMany(type => TimeEntry, timeEntry => timeEntry.user)
  public timeEntries: TimeEntry[];

  @OneToMany(type => UserPermission, userPermission => userPermission.user)
  public userPermissions: UserPermission[];
}
