import { MoreThanOrEqual, LessThanOrEqual, IsNull } from 'typeorm';
import TimeEntry from '../../../entity/TimeEntry';
import { ROLE_USER } from '../../../constants';
import { validateRole, authenticated } from '../../../auth';
import User from '../../../entity/User';
import { getRunningTimer } from '../mutation/timeEntry';

export const timeEntries = authenticated(
  validateRole(ROLE_USER)(async (_: any, { start, end }: any, { req }: any) => {
    const user = await User.findOne({ where: { id: req.user.id } });
    const relations = ['project', 'category'];

    const entries = await TimeEntry.find({
      where: {
        start: MoreThanOrEqual(start),
        end: LessThanOrEqual(end),
        user,
      },
      relations,
    });

    const timer = await getRunningTimer(user, relations);

    if (timer) {
      entries.push(timer);
    }

    return entries;
  })
);

export const isTimerRunning = authenticated(
  validateRole(ROLE_USER)(async (_: any, __: any, { req }: any) => {
    const user = await User.findOne({ where: { id: req.user.id } });
    const timer = await getRunningTimer(user);

    return !!timer;
  })
);
