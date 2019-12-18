import Project from '../../db/models/Project.model';
import { ROLE_ADMIN } from '../../constants';
import { authenticated, validateRole } from '../auth/auth';
import { addProjectSchema } from '../validation/validationSchemas';
import {
  MutationRemoveProjectArgs,
  MutationUpdateProjectArgs,
  MutationAddProjectArgs,
  QueryProjectArgs,
} from '../../generated/graphql';

interface ProjectMutationResponse extends MutationResponse {
  project: Project;
}

export const addProject = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { project }: MutationAddProjectArgs): Promise<ProjectMutationResponse> => {
      const { title, description, color, codename } = project;

      try {
        await addProjectSchema.validate(project);
      } catch (error) {
        return {
          code: '400',
          success: false,
          message: error.message,
          project: null,
        };
      }

      const newProject = Project.create({
        title,
        description,
        color,
        codename,
      });

      await newProject.save();

      return {
        code: '200',
        success: true,
        message: `Project ${newProject.codename} added`,
        project: newProject,
      };
    }
  )
);

export const updateProject = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { id, project }: MutationUpdateProjectArgs): Promise<ProjectMutationResponse> => {
      const foundProject = await Project.findOne({ where: { id } });

      if (!foundProject) {
        return {
          code: '404',
          success: false,
          message: `Project ${id} not found`,
          project: null,
        };
      }

      const { title, description, color, codename } = project;

      if (title !== undefined) {
        foundProject.title = title;
      }

      if (description !== undefined) {
        foundProject.description = description;
      }

      if (color !== undefined) {
        foundProject.color = color;
      }

      if (codename !== undefined) {
        foundProject.codename = codename;
      }

      await foundProject.save();

      return {
        code: '200',
        success: true,
        message: `Project ${foundProject.codename} updated`,
        project: foundProject,
      };
    }
  )
);

export const removeProject = authenticated(
  validateRole(ROLE_ADMIN)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_: any, { id }: MutationRemoveProjectArgs): Promise<ProjectMutationResponse> => {
      const project = await Project.findOne({ where: { id } });

      if (!project) {
        return {
          code: '404',
          success: false,
          message: `Project ${id} not found`,
          project: null,
        };
      }

      return {
        code: '200',
        success: true,
        message: `Category ${id} deleted`,
        project: await Project.remove(project),
      };
    }
  )
);

export const projects = authenticated(
  validateRole(ROLE_ADMIN)(() => {
    return Project.find();
  })
);

export const project = authenticated(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validateRole(ROLE_ADMIN)((_: any, { id, codename }: QueryProjectArgs) => {
    if (!id && !codename) {
      throw new Error('id or codename required');
    }

    if (id) {
      return Project.findOne({ id });
    }

    return Project.findOne({ codename });
  })
);
