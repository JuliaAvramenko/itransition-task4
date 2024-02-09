import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '../types'
import { userData } from '../../mockData/data'
import { TUser } from '../../types/types'

export const getUserData = createAsyncThunk<TUser[], void, ThunkConfig>(  
  "get-user-data",
  async (_, thunkAPI) => {    
    const { rejectWithValue, extra } = thunkAPI
    try {
    //   const { data } = await extra.api.get(ApiRoutes.BLOG_POSTS)
      return userData
    } catch (error) {
      return rejectWithValue("some error")
    }
  }
)