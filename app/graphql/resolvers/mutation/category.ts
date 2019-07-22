import { authenticated, validateRole } from '../../../auth';
import { ROLE_USER, ROLE_ADMIN } from '../../../constants';
import Category from '../../../entity/Category';

export const addCategory = authenticated(
  validateRole(ROLE_ADMIN)(async (_: any, { title, icon, valuable }: any) => {
    const category = Category.create({
      title,
      icon,
      valuable,
    });

    await category.save();

    return category;
  })
);
