import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../types'
import { apiPutBlockUser } from '../../api/api'


export const blockUser = createAsyncThunk<Number, Number, ThunkConfig>(
  "block-user-data",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      await apiPutBlockUser(userId)
      return userId

    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)