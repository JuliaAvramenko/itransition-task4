import { TUser } from "../types/types"

export interface StateSchema {
  users: IUserDataSchema
    // login: LoginSchema 
  }
   
  export interface ThunkConfig {    
    state: StateSchema
  }

  export interface IUserDataSchema {
    isLoading: boolean
    users: TUser[]
    error?: string | string[]
    currentUser: TUser | null
  }

  export interface ICreateUserRequest {
    name: string
    profession: string
    email: string
    password: string
  }

  export interface ILoginRequest {
    email: string
    password: string
  }