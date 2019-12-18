import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry.model';
import UserPermission from './UserPermission.model';

@Entity('projects')
export default class Project extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar', { length: 60 }) public title: string;

  @Column('varchar', { length: 255 }) public description: string;

  @Column('varchar', { length: 7 }) public color: string;

  @Column('varchar', { length: 30, unique: true, nullable: false }) public codename: string;

  @OneToMany(
    () => TimeEntry,
    timeEntry => timeEntry.project
  )
  public timeEntries: TimeEntry[];

  @OneToMany(
    () => UserPermission,
    userPermission => userPermission.project
  )
  public userPermissions: UserPermission[];
}
