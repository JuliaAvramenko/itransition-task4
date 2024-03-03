import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../types'
import { TUser } from '../../types/types'
import { apiGetUsers } from '../../api/api'

export const getUserData = createAsyncThunk<TUser[], void, ThunkConfig>(
  "get-user-data",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const data = await apiGetUsers()

      return data
    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)