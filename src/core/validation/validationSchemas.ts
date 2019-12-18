import * as yup from 'yup';

export const registerPersonalInfoSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup
    .string()
    .required()
    .min(3),
});

export const registerCredentialsSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(255),
});

export const addCategorySchema = yup.object().shape({
  title: yup.string().required(),
  icon: yup.string(),
  valuable: yup.boolean(),
});

export const addPermissionSchema = yup.object().shape({
  title: yup.string().required(),
});

export const addProjectSchema = yup.object().shape({
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
