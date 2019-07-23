import Category from '../../../entity/Category';
import { ROLE_ADMIN } from '../../../constants';
import { validateRole, authenticated } from '../../../auth';
import { QueryGetCategoryArgs } from '../../graphql';

export const getAllCategories = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Category.find();
  })
);

export const getCategory = authenticated(
  validateRole(ROLE_ADMIN)((_: any, { id }: QueryGetCategoryArgs) => {
    return Category.findOne({ id });
  })
);
