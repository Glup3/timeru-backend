import { authenticated, validateRole } from '../../../auth';
import { ROLE_USER } from '../../../constants';
import MutationResponseType from '../../../types/mutationResponse';
import TimeEntry from '../../../entity/TimeEntry';
import Project from '../../../entity/Project';
import Category from '../../../entity/Category';
import User from '../../../entity/User';

interface TimeEntryMutationResponse extends MutationResponseType {
  timeEntry: TimeEntry;
}

export const getRunningTimer = (user: User) => {
  return TimeEntry.findOne({ where: { end: null, user } });
};

export const startTimer = authenticated(
  validateRole(ROLE_USER)(
    async (_: any, { timerInput }: any, { req }: any): Promise<TimeEntryMutationResponse> => {
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

      const { start, title, description, valuable, projectId, categoryId } = timerInput;

      const project = await Project.findOne({ relations: ['timeEntries'], where: { id: projectId } });
      const category = await Category.findOne({ relations: ['timeEntries'], where: { id: categoryId } });

      const entry = TimeEntry.create({
        title,
        description,
        start,
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
    async (_: any, { end }: any, { req }: any): Promise<TimeEntryMutationResponse> => {
      const user = await User.findOne({ where: { id: req.user.id } });
      const timer = await getRunningTimer(user);

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
          message: "end can't be greater than start",
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
