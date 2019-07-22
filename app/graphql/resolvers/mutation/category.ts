import { authenticated, validateRole } from '../../../auth';
import { ROLE_USER, ROLE_ADMIN } from '../../../constants';
import Category from '../../../entity/Category';
import { MutationRemoveCategoryArgs, MutationAddCategoryArgs, MutationUpdateCategoryArgs } from '../../graphql';

export const addCategory = authenticated(
  validateRole(ROLE_ADMIN)(async (_: any, { title, icon, valuable }: MutationAddCategoryArgs) => {
    const category = Category.create({
      title,
      icon,
      valuable,
    });

    await category.save();

    return category;
  })
);

export const removeCategory = authenticated(
  validateRole(ROLE_ADMIN)(async (_: any, { id }: MutationRemoveCategoryArgs) => {
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return new Error(`Category ID ${id} not found`);
    }

    return Category.remove(category);
  })
);

export const updateCategory = authenticated(
  validateRole(ROLE_ADMIN)(async (_: any, { id, title, icon, valuable }: MutationUpdateCategoryArgs) => {
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return new Error(`Category ID ${id} not found`);
    }

    if (title !== undefined) {
      category.title = title;
    }

    if (icon !== undefined) {
      category.icon = icon;
    }

    if (valuable !== undefined) {
      category.valuable = valuable;
    }

    await category.save();

    return category;
  })
);
