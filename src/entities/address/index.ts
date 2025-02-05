import addressController from './api/address';
import { useAddressQuery } from './model/hook';
import { AddressRequestSchema, AddressRequestType, AddressResponseSchema, AddressResponseType } from './model/schema';
import { validateAddressRequestData, validateAddressResponseData } from './model/validator';

export {
  addressController,
  useAddressQuery
};

export {
  AddressRequestSchema,
  AddressResponseSchema
};

export {
  validateAddressRequestData,
  validateAddressResponseData
};

export type {
  AddressRequestType,
  AddressResponseType
};