import { ValidationError } from 'yup';
import ErrorType from '../types/error';

const formatYupError = (error: ValidationError): ErrorType[] => {
  const errors: ErrorType[] = [];

  error.inner.forEach((e): void => {
    errors.push({
      path: e.path,
      message: e.message,
    });
  });

  return errors;
};

export default formatYupError;
