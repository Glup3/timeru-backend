import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';
import Project from './Project';
import Permission from './Permission';

@Entity('user_permissions')
export default class UserPermission extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @ManyToOne(
    type => User,
    user => user.userPermissions
  )
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToOne(
    type => Project,
    project => project.userPermissions
  )
  @JoinColumn({ name: 'project_id' })
  public project: Project;

  @ManyToOne(
    type => Permission,
    permission => permission.userPermissions
  )
  @JoinColumn({ name: 'permission_id' })
  public permission: Permission;
}
