export interface IAuthStore {
  auth: boolean
  role: string
  setAuth: ( auth: boolean ) => void
  setRole: ( role: 'USER' | 'ADMIN' ) => void
}