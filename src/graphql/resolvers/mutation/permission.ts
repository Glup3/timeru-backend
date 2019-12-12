import * as yup from 'yup';

import { authenticated, validateRole } from '../../../auth';
import { ROLE_ADMIN } from '../../../constants';

import Permission from '../../../entity/Permission';
import { MutationAddPermissionArgs, MutationUpdatePermissionArgs, MutationRemovePermissionArgs } from '../../graphql';

interface PermissionMutationResponse extends MutationResponse {
  permission: Permission;
}

const addPermissionSchema = yup.object().shape({
  title: yup.string().required(),
});

export const addPermission = authenticated(
  validateRole(ROLE_ADMIN)(
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
