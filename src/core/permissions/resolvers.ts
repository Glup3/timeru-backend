import Permission from '../../db/models/Permission.model';
import { ROLE_ADMIN } from '../../constants';
import { authenticated, validateRole } from '../auth/auth';
import { addPermissionSchema } from '../validation/validationSchemas';
import {
  MutationAddPermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
  QueryPermissionArgs,
} from '../../generated/graphql';

interface PermissionMutationResponse extends MutationResponse {
  permission: Permission;
}

export const addPermission = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { permission }: MutationAddPermissionArgs): Promise<PermissionMutationResponse> => {
      const { title } = permission;

      try {
        await addPermissionSchema.validate(permission, { abortEarly: false });
      } catch (errors) {
        return {
          code: '400',
          success: false,
          message: errors.inner[0].message,
          permission: null,
        };
      }

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { id, permission }: MutationUpdatePermissionArgs): Promise<PermissionMutationResponse> => {
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

export const removePermission = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { id }: MutationRemovePermissionArgs): Promise<PermissionMutationResponse> => {
      const permission = await Permission.findOne({ where: { id } });

      if (!permission) {
        return {
          code: '404',
          success: false,
          message: `Permission ${id} not found`,
          permission: null,
        };
      }

      return {
        code: '200',
        success: true,
        message: `Permission ${permission.title} deleted`,
        permission: await Permission.remove(permission),
      };
    }
  )
);

export const permissions = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Permission.find();
  })
);

export const permission = authenticated(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validateRole(ROLE_ADMIN)((_: any, { id, title }: QueryPermissionArgs) => {
    if (id == null && title == null) {
      throw new Error('id or title required');
    }

    if (id) {
      return Permission.findOne({ id });
    }

    return Permission.findOne({ title });
  })
);
