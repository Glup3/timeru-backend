import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import Category from './Category';
import Project from './Project';
import User from './User';

@Entity('time_entries')
export default class TimeEntry extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar', { length: 60 }) public title: string;

  @Column('varchar') public description: string;

  @Column('datetime') public start: Date;

  @Column('datetime') public end: Date;

  @Column('int', { comment: 'in seconds' }) public duration: number;

  @Column('boolean') public valuable: boolean;

  @ManyToOne(type => User, user => user.timeEntries)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToOne(type => Project, project => project.timeEntries)
  @JoinColumn({ name: 'project_id' })
  public project: Project;

  @ManyToOne(type => Category, category => category.timeEntries)
  @JoinColumn({ name: 'category_id' })
  public category: Category;
}
