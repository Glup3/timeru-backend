import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import User from './User.model';
import Project from './Project.model';
import Permission from './Permission.model';

@Entity('user_permissions')
export default class UserPermission extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @ManyToOne(
    () => User,
    user => user.userPermissions
  )
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToOne(
    () => Project,
    project => project.userPermissions
  )
  @JoinColumn({ name: 'project_id' })
  public project: Project;

  @ManyToOne(
    () => Permission,
    permission => permission.userPermissions
  )
  @JoinColumn({ name: 'permission_id' })
  public permission: Permission;
}
