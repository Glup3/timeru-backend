import Project from '../../../entity/Project';
import { ROLE_ADMIN } from '../../../constants';
import { validateRole, authenticated } from '../../../auth';
import { QueryProjectArgs } from '../../graphql';

export const projects = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Project.find();
  })
);

export const project = authenticated(
  validateRole(ROLE_ADMIN)((_: any, { id, codename }: QueryProjectArgs) => {
    if (!id && !codename) {
      throw new Error('id or codename required');
    }

    if (id) {
      return Project.findOne({ id });
    }

    return Project.findOne({ codename });
  })
);
