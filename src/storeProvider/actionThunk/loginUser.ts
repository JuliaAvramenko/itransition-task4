import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILoginRequest, ThunkConfig } from '../types'
import { TUser } from '../../types/types'
import { apiLogin } from '../../api/api'

export const loginUser = createAsyncThunk<TUser, ILoginRequest, ThunkConfig>(
  "login-user",
  async (loginRequest, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {

      const data = await apiLogin(loginRequest)
      return data

    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)