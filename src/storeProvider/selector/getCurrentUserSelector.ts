import { StateSchema } from "../types"
export const getCurrentUserSelector = (state: StateSchema) => {
  return state.users.currentUser
}