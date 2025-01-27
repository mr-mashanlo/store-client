import userController from './api/controller';
import { AuthRequestSchema, AuthRequestType, AuthResponseSchema, AuthResponseType } from './model/authSchema';
import { getUserID, setUserID } from './model/mediator';
import { UserResponseSchema, UserResponseType } from './model/userSchema';
import { validateAuthRequestData, validateAuthResponseData } from './model/validator';

export {
  AuthRequestSchema,
  AuthResponseSchema,
  getUserID,
  setUserID,
  userController,
  UserResponseSchema,
  validateAuthRequestData,
  validateAuthResponseData };

export type {
  AuthRequestType,
  AuthResponseType,
  UserResponseType
};