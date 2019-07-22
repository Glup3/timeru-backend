import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import UserPermission from './UserPermission';

@Entity('permissions')
export default class Permission extends BaseEntity {
  @PrimaryGeneratedColumn() public id: number;

  @Column('varchar') public title: string;

  @OneToMany(type => UserPermission, userPermission => userPermission.permission)
  public userPermissions: Permission[];
}
