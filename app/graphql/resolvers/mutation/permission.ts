import { authenticated, validateRole } from '../../../auth';
import { ROLE_ADMIN } from '../../../constants';
import MutationResponseType from '../../../types/mutationResponse';
import Permission from '../../../entity/Permission';

interface PermissionMutationResponse extends MutationResponseType {
  permission: Permission;
}

export const addPermission = authenticated(
  validateRole(ROLE_ADMIN)(
    async (_: any, { permission }: any): Promise<PermissionMutationResponse> => {
      const { title } = permission;

      const newPermission = Permission.create({
        title,
      });

      await newPermission.save();

      return {
        code: '200',
        success: true,
        message: `Permission ${newPermission.title} added`,
        permission: newPermission,
      };
    }
  )
);

export const updatePermission = authenticated(
  validateRole(ROLE_ADMIN)(
    async (_: any, { id, permission }: any): Promise<PermissionMutationResponse> => {
      const foundPermission = await Permission.findOne({ where: { id } });

      if (!foundPermission) {
        return {
          code: '404',
          success: false,
          message: `Permission ${id} not found`,
          permission: null,
        };
      }

      const { title } = permission;

      if (title !== undefined) {
        foundPermission.title = title;
      }

      await foundPermission.save();

      return {
        code: '200',
        success: true,
        message: `Permission ${foundPermission.id} updated`,
        permission: foundPermission,
      };
    }
  )
);
