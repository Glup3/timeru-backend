import * as yup from 'yup';

import { authenticated, validateRole } from '../../../auth';
import { ROLE_ADMIN } from '../../../constants';
import Project from '../../../entity/Project';
import { MutationRemoveProjectArgs, MutationUpdateProjectArgs, MutationAddProjectArgs } from '../../graphql';

interface ProjectMutationResponse extends MutationResponse {
  project: Project;
}

const addProjectSchema = yup.object().shape({
  title: yup.string().max(60),
  description: yup.string().max(255),
  color: yup
    .string()
    .min(7)
    .max(7),
  codename: yup
    .string()
    .required()
    .max(30),
});

export const addProject = authenticated(
  validateRole(ROLE_ADMIN)(
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
