import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry.model';
import UserPermission from './UserPermission.model';

@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('int', { default: 0 }) public count: number;

  @Column('varchar', { length: 255, unique: true }) public username: string;

  @Column('varchar', { length: 255 }) public firstName: string;

  @Column('varchar', { length: 255 }) public lastName: string;

  @Column('varchar', { length: 255, unique: true }) public email: string;

  @Column('varchar', { length: 255, default: 'USER' }) public role: string;

  @Column('boolean', { default: true }) public active: boolean;

  @Column('text') public password: string;

  @OneToMany(
    () => TimeEntry,
    timeEntry => timeEntry.user
  )
  public timeEntries: TimeEntry[];

  @OneToMany(
    () => UserPermission,
    userPermission => userPermission.user
  )
  public userPermissions: UserPermission[];
}
