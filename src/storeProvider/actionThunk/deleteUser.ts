import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../types'
import { apiDeleteUser } from '../../api/api'

export const deleteUsers = createAsyncThunk<Number, Number, ThunkConfig>(
  "delete-user-data",
  async (userId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      await apiDeleteUser(userId)

      return userId
    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)