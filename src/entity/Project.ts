import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry';
import UserPermission from './UserPermission';

@Entity('projects')
export default class Project extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar', { length: 60 }) public title: string;

  @Column('varchar', { length: 255 }) public description: string;

  @Column('varchar', { length: 7 }) public color: string;

  @Column('varchar', { length: 30, unique: true, nullable: false }) public codename: string;

  @OneToMany(
    type => TimeEntry,
    timeEntry => timeEntry.project
  )
  public timeEntries: TimeEntry[];

  @OneToMany(
    type => UserPermission,
    userPermission => userPermission.project
  )
  public userPermissions: UserPermission[];
}
