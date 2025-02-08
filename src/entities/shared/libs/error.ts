import { HTTPError } from 'ky';
import { ZodError } from 'zod';

export async function validateResponseError( error: unknown ) {
  if ( error instanceof ZodError ) {
    return { name: String( error.errors[0].path[0] ), message: error.errors[0].message };
  } else if ( error instanceof HTTPError ) {
    const response = await error.response.json();
    return { name: response.name, message: response.message };
  } else if ( error instanceof TypeError ) {
    return { name: 'network', message: 'Server is not responding. Please try again later.' };
  } else {
    return { name: 'unknown', message: 'Something went wrong. Please try again later.' };
  }
}