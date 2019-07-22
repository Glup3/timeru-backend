import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry';
import UserPermission from './UserPermission';

@Entity('projects')
export default class Project extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar') public title: string;

  @Column('varchar') public description: string;

  @Column('varchar') public color: string;

  @Column('varchar') public codename: string;

  @OneToMany(type => TimeEntry, timeEntry => timeEntry.project)
  public timeEntries: TimeEntry[];

  @OneToMany(type => UserPermission, userPermission => userPermission.project)
  public userPermissions: UserPermission[];
}
