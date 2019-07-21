import * as bcrypt from 'bcryptjs';
import User from './entity/User';

const resolvers = {
  Query: {
    hello: (): string => 'Hello World!',
  },
  Mutation: {
    register: async (_: any, { email, password, firstName, lastName }: any): Promise<[object]> => {
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
  },
};

export default resolvers;
