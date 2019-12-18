import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import UserPermission from './UserPermission.model';

@Entity('permissions')
export default class Permission extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar', { unique: true }) public title: string;

  @OneToMany(
    () => UserPermission,
    userPermission => userPermission.permission
  )
  public userPermissions: UserPermission[];
}
