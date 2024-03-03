import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../types'
import { apiPutUnblockUser } from '../../api/api'

export const unblockUser = createAsyncThunk<Number, Number, ThunkConfig>(
  "unblock-user-data",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      await apiPutUnblockUser(userId)
      return userId
    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)