import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import Category from './Category.model';
import Project from './Project.model';
import User from './User.model';

@Entity('time_entries')
export default class TimeEntry extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar', { length: 60, nullable: true }) public title: string;

  @Column('varchar', { nullable: true }) public description: string;

  @Column('datetime', { nullable: false }) public start: Date;

  @Column('datetime', { nullable: true }) public end: Date;

  @Column('int', { comment: 'in seconds', nullable: true }) public duration: number;

  @Column('boolean') public valuable: boolean;

  @ManyToOne(
    () => User,
    user => user.timeEntries
  )
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToOne(
    () => Project,
    project => project.timeEntries
  )
  @JoinColumn({ name: 'project_id' })
  public project: Project;

  @ManyToOne(
    () => Category,
    category => category.timeEntries
  )
  @JoinColumn({ name: 'category_id' })
  public category: Category;
}
