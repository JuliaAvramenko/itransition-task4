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
  }