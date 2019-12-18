import User from '../../db/models/User.model';
import { authenticated, validateRole } from '../auth/auth';
import { ROLE_ADMIN } from '../../constants';
import { MutationUpdateUserArgs } from '../../generated/graphql';

interface UserMutationResponse extends MutationResponse {
  user: User;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const me = authenticated(async (_: any, __: any, { req }: any): Promise<User> => User.findOne(req.user.id));

export const updateUser = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { id, user }: MutationUpdateUserArgs): Promise<UserMutationResponse> => {
      const foundUser = await User.findOne({ where: { id } });

      if (!foundUser) {
        return {
          code: '404',
          success: false,
          message: `User ${id} not found`,
          user: null,
        };
      }

      const { firstName, lastName, role, active } = user;

      if (firstName !== undefined) {
        foundUser.firstName = firstName;
      }

      if (lastName !== undefined) {
        foundUser.lastName = lastName;
      }

      if (role !== undefined) {
        foundUser.role = role;
      }

      if (active !== undefined) {
        foundUser.active = active;
      }

      await foundUser.save();

      return {
        code: '200',
        success: true,
        message: `User ${foundUser.username} updated`,
        user: foundUser,
      };
    }
  )
);
