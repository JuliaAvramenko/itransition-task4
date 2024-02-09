import { createSlice } from '@reduxjs/toolkit'
// import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { IUserDataSchema } from '../types'
import { getUserData } from '../actionThunk/getUserData'

const initialState: IUserDataSchema = {
  isLoading: false,
  users: []
}

export const userDataReducer = createSlice({
  name: "user_data_reducer",
  initialState,
  reducers: 
  {
    // errorReset: state => {
    //   state.error = undefined
    // }
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
  }
})
export const { actions: userDataActions, reducer: dataUsersReducer } = userDataReducer