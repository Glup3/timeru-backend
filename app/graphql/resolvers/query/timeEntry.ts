import { MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import TimeEntry from '../../../entity/TimeEntry';
import { ROLE_USER } from '../../../constants';
import { validateRole, authenticated } from '../../../auth';
import User from '../../../entity/User';

export const timeEntries = authenticated(
  validateRole(ROLE_USER)(async (_: any, { start, end }: any, { req }: any) => {
    const user = await User.findOne({ where: { id: req.user.id } });

    return TimeEntry.find({
      where: {
        start: MoreThanOrEqual(start),
        end: LessThanOrEqual(end),
        user,
      },
      relations: ['project', 'category'],
    });
  })
);

export const temp = () => null;
