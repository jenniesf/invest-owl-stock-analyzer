
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import companyService from './companyService'

// Create intial state object
const initialState = {
  companies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new company - route is protected; 
  // token is in already in localstorage and in the auth state
export const createCompany = createAsyncThunk(
  'companies/create',
  async (companyData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await companyService.createCompany(companyData, token)
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


// Get user companies -- GET ALL COMPANIES
  // route is protected, so need to use token; need to know which user and user ID is in token
export const getCompanies = createAsyncThunk(
  'companies/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await companyService.getCompanies(token)
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



// Delete user company - click delete icon on frontend page
  // object ID provided from the frontend redux state
export const deleteCompany = createAsyncThunk(
  'companies/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await companyService.deleteCompany(id, token)
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


export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompany.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.companies.push(action.payload)
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCompanies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.companies = action.payload
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCompany.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // use filter to take it out of the UI so dont need to reload the page
        state.companies = state.companies.filter(
          (company) => company._id !== action.payload.id
        )
      })
      .addCase(deleteCompany.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = companySlice.actions
export default companySlice.reducer



