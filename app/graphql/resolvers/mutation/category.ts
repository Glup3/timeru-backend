import { authenticated, validateRole } from '../../../auth';
import { ROLE_ADMIN } from '../../../constants';
import Category from '../../../entity/Category';
import MutationResponseType from '../../../types/mutationResponse';
import { MutationRemoveCategoryArgs, MutationAddCategoryArgs, MutationUpdateCategoryArgs } from '../../graphql';

interface CategoryMutationResponse extends MutationResponseType {
  category: Category;
}

export const addCategory = authenticated(
  validateRole(ROLE_ADMIN)(async (_: any, { category }: MutationAddCategoryArgs) => {
    const { title, icon, valuable } = category;

    const newCategory = Category.create({
      title,
      icon,
      valuable,
    });

    await newCategory.save();

    const response: CategoryMutationResponse = {
      code: '200',
      success: true,
      message: `Category ${newCategory.id} added`,
      category: newCategory,
    };

    return response;
  })
);

export const removeCategory = authenticated(
  validateRole(ROLE_ADMIN)(
    async (_: any, { id }: MutationRemoveCategoryArgs): Promise<CategoryMutationResponse> => {
      const category = await Category.findOne({ where: { id } });

      if (!category) {
        return {
          code: '404',
          success: false,
          message: `Category ${id} not found`,
          category: null,
        };
      }

      return {
        code: '200',
        success: true,
        message: `Category ${id} deleted`,
        category: await Category.remove(category),
      };
    }
  )
);

export const updateCategory = authenticated(
  validateRole(ROLE_ADMIN)(
    async (_: any, { id, category }: MutationUpdateCategoryArgs): Promise<CategoryMutationResponse> => {
      const foundCategory = await Category.findOne({ where: { id } });

      if (!foundCategory) {
        return {
          code: '404',
          success: false,
          message: `Category ${id} not found`,
          category: null,
        };
      }

      const { title, icon, valuable } = category;

      if (title !== undefined) {
        foundCategory.title = title;
      }

      if (icon !== undefined) {
        foundCategory.icon = icon;
      }

      if (valuable !== undefined) {
        foundCategory.valuable = valuable;
      }

      await foundCategory.save();

      return {
        code: '200',
        success: true,
        message: `Category ${id} updated`,
        category: foundCategory,
      };
    }
  )
);
