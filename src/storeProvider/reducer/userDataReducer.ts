import { createSlice } from '@reduxjs/toolkit'
// import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { IUserDataSchema } from '../types'
import { getUserData } from '../actionThunk/getUserData'
import { deleteUsers } from '../actionThunk/deleteUser'
import { createUser } from '../actionThunk/createUser'
import { blockUser } from '../actionThunk/blockUser'
import { unblockUser } from '../actionThunk/unblockUser'
import { loginUser } from '../actionThunk/loginUser'
import { logoutUser } from '../actionThunk/logoutUser'

const initialState: IUserDataSchema = {
  isLoading: false,
  users: [],
  currentUser: null
}

export const userDataReducer = createSlice({
  name: "user_data_reducer",
  initialState,
  reducers:
  {
    currentUserReset: state => {
      state.currentUser = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUserData.pending, state => {
        state.isLoading = true
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.users = payload
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })
      .addCase(deleteUsers.pending, state => {
        // state.isLoading = true
      })
      .addCase(deleteUsers.fulfilled, (state, { payload }) => {

        const usersArray = state.users.filter((item) => item.id !== payload)
        if (payload === state.currentUser?.id) {
          state.currentUser = null
        }
        state.users = usersArray
      })
      .addCase(deleteUsers.rejected, (state, { payload }) => {
        //state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })
      .addCase(createUser.pending, state => {
        // state.isLoading = true
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.users = [...state.users, payload]
        state.currentUser = payload
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        //state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })
      .addCase(blockUser.pending, state => {
        // state.isLoading = true
      })
      .addCase(blockUser.fulfilled, (state, { payload }) => {

        state.users.map((item) => {
          if (item.id === payload) {
            item.status = "blocked"
          }
          return state.users
        })


      })
      .addCase(blockUser.rejected, (state, { payload }) => {
        //state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })
      .addCase(unblockUser.pending, state => {
        // state.isLoading = true
      })
      .addCase(unblockUser.fulfilled, (state, { payload }) => {

        const usersArray = state.users.map((item) => {
          if (item.id === payload) {
            item.status = 'active'
          }
          return item
        })
        state.users = usersArray
      })
      .addCase(unblockUser.rejected, (state, { payload }) => {
        //state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })

      .addCase(loginUser.pending, state => {
        // state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        //state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })


      .addCase(logoutUser.pending, state => {
        // state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.currentUser = null
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        //state.isLoading = false
        // state.error = rejectedPayloadHandle(payload)
      })
  }
})
export const { actions: userDataActions, reducer: dataUsersReducer } = userDataReducer