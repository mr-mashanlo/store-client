export interface IAuthStore {
  id: string
  auth: boolean
  role: string
  setID: ( id: string ) => void
  setAuth: ( auth: boolean ) => void
  setRole: ( role: 'USER' | 'ADMIN' ) => void
}