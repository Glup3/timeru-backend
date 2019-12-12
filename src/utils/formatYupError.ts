import { ValidationError } from 'yup';

const formatYupError = (error: ValidationError): MutationResponse[] => {
  const errors: MutationResponse[] = [];

  error.inner.forEach((e): void => {
    errors.push({
      code: '400',
      message: e.message,
      success: false,
    });
  });

  return errors;
};

export default formatYupError;
