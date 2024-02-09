import { StateSchema } from "../types"
export const getUserDataSelector = (state: StateSchema) => {
  return state.users.users
}