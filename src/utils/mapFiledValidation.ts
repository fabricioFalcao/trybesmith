import { JoiError } from '../types/joiError';
import mapStatusHTTP from './mapStatusHTTP';

const mapFieldValidation = (error: JoiError): number => {
  if (error.details[0].type === 'any.required') return mapStatusHTTP('BAD_REQUEST');
  console.log(error);
  return mapStatusHTTP('INVALID_VALUE');
};

export default mapFieldValidation;