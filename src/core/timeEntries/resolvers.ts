import { MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { authenticated, validateRole } from '../auth/auth';
import { ROLE_USER } from '../../constants';
import TimeEntry from '../../db/models/TimeEntry.model';
import Project from '../../db/models/Project.model';
import Category from '../../db/models/Category.model';
import User from '../../db/models/User.model';
import { MutationStartTimerArgs, QueryTimeEntriesArgs } from '../../generated/graphql';

interface TimeEntryMutationResponse extends MutationResponse {
  timeEntry: TimeEntry;
}

export const getRunningTimer = (user: User, relations?: string[]) => {
  return TimeEntry.findOne({ where: { end: null, user }, relations });
};

export const startTimer = authenticated(
  validateRole(ROLE_USER)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { timerInput }: MutationStartTimerArgs, { req }: any): Promise<TimeEntryMutationResponse> => {
      const user = await User.findOne({ relations: ['timeEntries'], where: { id: req.user.id } });
      const timer = await getRunningTimer(user);

      if (timer) {
        return {
          code: '400',
          success: false,
          message: 'timer is already running',
          timeEntry: timer,
        };
      }

      const { title, description, valuable, projectId, categoryId } = timerInput;

      const project = await Project.findOne({ relations: ['timeEntries'], where: { id: projectId } });
      const category = await Category.findOne({ relations: ['timeEntries'], where: { id: categoryId } });

      const entry = TimeEntry.create({
        title,
        description,
        start: new Date(),
        end: null,
        duration: null,
        valuable: valuable || false,
        user,
        project,
        category,
      });

      if (!user.timeEntries) {
        user.timeEntries = [];
      }
      user.timeEntries.push(entry);
      await user.save();

      if (project) {
        if (!project.timeEntries) {
          project.timeEntries = [];
        }
        project.timeEntries.push(entry);
        project.save();
      }

      if (category) {
        if (!category.timeEntries) {
          category.timeEntries = [];
        }
        category.timeEntries.push(entry);
        category.save();
      }

      await entry.save();

      return {
        code: '200',
        success: true,
        message: 'timer started',
        timeEntry: entry,
      };
    }
  )
);

export const stopTimer = authenticated(
  validateRole(ROLE_USER)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, __: any, { req }: any): Promise<TimeEntryMutationResponse> => {
      const user = await User.findOne({ where: { id: req.user.id } });
      const timer = await getRunningTimer(user);
      const end = new Date();

      if (!timer) {
        return {
          code: '400',
          success: false,
          message: 'no running timer',
          timeEntry: null,
        };
      }

      if (timer.start > end) {
        return {
          code: '400',
          success: false,
          message: "end time can't be before start time",
          timeEntry: timer,
        };
      }

      timer.end = end;
      timer.duration = (timer.end.getTime() - timer.start.getTime()) / 1000;

      await timer.save();

      return {
        code: '200',
        success: true,
        message: 'timer stopped',
        timeEntry: timer,
      };
    }
  )
);

export const updateTimer = () => {};

export const timeEntries = authenticated(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validateRole(ROLE_USER)(async (_: any, { start, end }: QueryTimeEntriesArgs, { req }: any) => {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validateRole(ROLE_USER)(async (_: any, __: any, { req }: any) => {
    const user = await User.findOne({ where: { id: req.user.id } });
    const timer = await getRunningTimer(user);

    return !!timer;
  })
);
