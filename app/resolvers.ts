import * as bcrypt from 'bcryptjs';
import * as yup from 'yup';
import User from './entity/User';
import ErrorType from './types/error';
import formatYupError from './utils/formatYupError';

const registerSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .min(6)
    .max(255),
  firstName: yup.string(),
  lastName: yup.string(),
  username: yup.string().min(3),
});

const resolvers = {
  Query: {
    hello: (): string => 'Hello World!',
  },
  Mutation: {
    register: async (_: any, args: any): Promise<ErrorType[]> => {
      try {
        await registerSchema.validate(args, { abortEarly: false });
      } catch (error) {
        return formatYupError(error);
      }

      const { email, password, firstName, lastName, username } = args;

      const emailAlreadyExists = await User.findOne({
        where: { email },
        select: ['id'],
      });

      if (emailAlreadyExists) {
        return [
          {
            path: 'email',
            message: 'already taken',
          },
        ];
      }

      const usernameAlreadyExists = await User.findOne({
        where: { username },
        select: ['id'],
      });

      if (usernameAlreadyExists) {
        return [
          {
            path: 'username',
            message: 'already taken',
          },
        ];
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });

      await user.save();

      return null;
    },
    login: async (_: any, { email, password }: any): Promise<ErrorType[]> => {
      const user = await User.findOne({ where: { email } });

      const errorResponse = [
        {
          path: 'email/password',
          message: 'invalid email or password',
        },
      ];

      if (!user) {
        return errorResponse;
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return errorResponse;
      }

      return null;
    },
  },
};

export default resolvers;
