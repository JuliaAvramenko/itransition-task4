import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICreateUserRequest, ThunkConfig } from '../types'
import { TUser } from '../../types/types'
import { apiPostCreateUser } from '../../api/api'



export const createUser = createAsyncThunk<TUser, ICreateUserRequest, ThunkConfig>(
  "create-user",
  async (userRequest, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {
      const data = await apiPostCreateUser(userRequest)
      return data

    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)