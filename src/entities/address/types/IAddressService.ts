import { IAddress } from './IAddress';

export interface IAddressService {
  getOne: ( id?: string ) => Promise<IAddress>,
  create: ( district: string, city: string, street: string ) => Promise<{ success: boolean, msg: string }>,
  update: ( id: string, updates: Partial<IAddress> ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}