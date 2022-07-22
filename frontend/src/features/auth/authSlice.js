// REDUCERS AND INITAL STATES WILL GO

// BRING IN REDUX FUNCTIONS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import authService from './authService'


// When you log in or register, 
  // you get back a token/user info from the server and its save to localStorage
  // Get the data from localStorage -- look for 'user' item
const user = JSON.parse(localStorage.getItem('user'))

// CREATE THE INTIAL STATE
  // AN OBJECT TO PERTAIN TO THE USER PART OR AUTHENTICATION
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// REGISTER USER - handle with register request
  // user is passed in from the register page component
  // run authService which returns token/data
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// LOGIN USER - called from login.jsx, run route from authService
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// LOGOUT USER
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

// CREATE THE SLICE
  // Have a reset function reducer to reset the state to default values
  // Add extraReducers - account for states after we register, login, and logout
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer



