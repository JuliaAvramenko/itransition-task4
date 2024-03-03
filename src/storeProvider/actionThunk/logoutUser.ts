import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../types'
import { TUser } from '../../types/types'
import { apiLogout } from '../../api/api'



export const logoutUser = createAsyncThunk<boolean, TUser, ThunkConfig>(
  "logout-user",
  async (user, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
      return user && await apiLogout(user.email) || true

    } catch (error) {
      return rejectWithValue("some error in Logout API")
    }
  }
)