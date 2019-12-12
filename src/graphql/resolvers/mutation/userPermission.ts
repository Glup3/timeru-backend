import User from '../../../entity/User';
import { authenticated, validateRole } from '../../../auth';
import { ROLE_ADMIN } from '../../../constants';
import UserPermission from '../../../entity/UserPermission';
import Project from '../../../entity/Project';
import Permission from '../../../entity/Permission';

interface UserPermissionMutationResponse extends MutationResponse {
  userPermission: UserPermission;
}

// eslint-disable-next-line import/prefer-default-export
export const addUserPermission = authenticated(
  validateRole(ROLE_ADMIN)(
    async (_: any, { userPermissionInput }: any): Promise<UserPermissionMutationResponse> => {
      const { userId, username, projectId, projectCodename, permissionId, permissionTitle } = userPermissionInput;

      if (!userId && !username) {
        return {
          code: '400',
          success: false,
          message: `user ID or name required`,
          userPermission: null,
        };
      }

      if (!projectId && !projectCodename) {
        return {
          code: '400',
          success: false,
          message: `project ID or code required`,
          userPermission: null,
        };
      }

      if (!permissionId && !permissionTitle) {
        return {
          code: '400',
          success: false,
          message: `permission ID or title required`,
          userPermission: null,
        };
      }

      const user: User = userId
        ? await User.findOne({ where: { id: userId } })
        : await User.findOne({ where: { username } });

      if (!user) {
        return {
          code: '404',
          success: false,
          message: `User not found`,
          userPermission: null,
        };
      }

      const project: Project = projectId
        ? await Project.findOne({ where: { id: projectId } })
        : await Project.findOne({ where: { codename: projectCodename } });

      if (!project) {
        return {
          code: '404',
          success: false,
          message: `Permission not found`,
          userPermission: null,
        };
      }

      const permission: Permission = permissionId
        ? await Permission.findOne({ where: { id: permissionId } })
        : await Permission.findOne({ where: { title: permissionTitle } });

      if (!permission) {
        return {
          code: '404',
          success: false,
          message: `Permission not found`,
          userPermission: null,
        };
      }

      const userPermission = UserPermission.create({
        user,
        permission,
        project,
      });
      await userPermission.save();

      if (!user.userPermissions) {
        user.userPermissions = [];
      }
      user.userPermissions.push(userPermission);
      await user.save();

      if (!permission.userPermissions) {
        permission.userPermissions = [];
      }
      permission.userPermissions.push(userPermission);
      await permission.save();

      if (!project.userPermissions) {
        project.userPermissions = [];
      }
      project.userPermissions.push(userPermission);
      await project.save();

      return {
        code: '200',
        success: true,
        message: `User ${user.username} can now do ${permission.title} on ${project.title}`,
        userPermission,
      };
    }
  )
);
