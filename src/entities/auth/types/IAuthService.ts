import { IUser } from './IUser';

export interface IAuthService {
  signin: ( email: string, password: string ) => Promise<IUser>
  signup: ( email: string, password: string, confirm: string ) => Promise<IUser>
  logout: () => void
  delete: () => void
  token: () => void
}