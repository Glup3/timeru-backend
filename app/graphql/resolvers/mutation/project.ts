import * as yup from 'yup';

import { authenticated, validateRole } from '../../../auth';
import { ROLE_ADMIN } from '../../../constants';
import Project from '../../../entity/Project';
import MutationResponseType from '../../../types/mutationResponse';

interface ProjectMutationResponse extends MutationResponseType {
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
    async (_: any, { project }: any): Promise<ProjectMutationResponse> => {
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
    async (_: any, { project }: any): Promise<ProjectMutationResponse> => {
      return {
        code: '200',
        success: true,
        message: `Project updated`,
        project: null,
      };
    }
  )
);
