import Category from '../../db/models/Category.model';
import { ROLE_ADMIN } from '../../constants';
import { authenticated, validateRole } from '../auth/auth';
import { addCategorySchema } from '../validation/validationSchemas';
import {
  MutationRemoveCategoryArgs,
  MutationAddCategoryArgs,
  MutationUpdateCategoryArgs,
  QueryCategoryArgs,
} from '../../generated/graphql';

interface CategoryMutationResponse extends MutationResponse {
  category: Category;
}

export const addCategory = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { category }: MutationAddCategoryArgs): Promise<CategoryMutationResponse> => {
      const { title, icon, valuable } = category;

      try {
        await addCategorySchema.validate(category, { abortEarly: false });
      } catch (errors) {
        return {
          code: '400',
          success: false,
          message: errors.inner[0].message,
          category: null,
        };
      }

      const newCategory = Category.create({
        title,
        icon,
        valuable,
      });

      await newCategory.save();

      return {
        code: '200',
        success: true,
        message: `Category ${newCategory.id} added`,
        category: newCategory,
      };
    }
  )
);

export const removeCategory = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const categories = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Category.find();
  })
);

export const category = authenticated(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validateRole(ROLE_ADMIN)((_: any, { id }: QueryCategoryArgs) => {
    return Category.findOne({ id });
  })
);
