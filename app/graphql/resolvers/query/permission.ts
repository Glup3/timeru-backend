import Permission from '../../../entity/Permission';
import { ROLE_ADMIN } from '../../../constants';
import { validateRole, authenticated } from '../../../auth';

export const permissions = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Permission.find();
  })
);

export const permission = authenticated(
  validateRole(ROLE_ADMIN)((_: any, { id, title }: any) => {
    if (!id && !title) {
      throw new Error('id or title required');
    }

    if (id) {
      return Permission.findOne({ id });
    }

    return Permission.findOne({ title });
  })
);
