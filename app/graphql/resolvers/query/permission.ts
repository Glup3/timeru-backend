import Permission from '../../../entity/Permission';
import { ROLE_ADMIN } from '../../../constants';
import { validateRole, authenticated } from '../../../auth';
import { QueryPermissionArgs } from '../../graphql';

export const permissions = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Permission.find();
  })
);

export const permission = authenticated(
  validateRole(ROLE_ADMIN)((_: any, { id, title }: QueryPermissionArgs) => {
    if (!id && !title) {
      throw new Error('id or title required');
    }

    if (id) {
      return Permission.findOne({ id });
    }

    return Permission.findOne({ title });
  })
);
