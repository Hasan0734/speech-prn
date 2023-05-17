import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './../features/api/apiSlice'
import authReducer from './../features/auth/authSlice'
import globalSlice from './../features/global/globalSlice'
import userReducer from './../features/user/userSlice'
import blogReducer from './../features/blog/blogSlice'
import characterReducer from './../features/characters/characterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
    blog: blogReducer,
    character: characterReducer,
    global: globalSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMIddlewares) =>
    getDefaultMIddlewares().concat(apiSlice.middleware),
})
