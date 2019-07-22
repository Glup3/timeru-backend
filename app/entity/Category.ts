import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry';

@Entity('categories')
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar') public title: string;

  @Column('varchar') public icon: string;

  @Column('boolean') public valuable: boolean;

  @OneToMany(type => TimeEntry, timeEntry => timeEntry.category)
  public timeEntries: TimeEntry[];
}
