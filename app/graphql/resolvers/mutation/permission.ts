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

export const updatePermission = () => null;
