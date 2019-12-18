import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TimeEntry from './TimeEntry.model';

@Entity('categories')
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar') public title: string;

  @Column('varchar', { default: 'default' }) public icon: string;

  @Column('boolean', { default: false }) public valuable: boolean;

  @OneToMany(
    () => TimeEntry,
    timeEntry => timeEntry.category
  )
  public timeEntries: TimeEntry[];
}
