import { configureStore } from '@reduxjs/toolkit'

// BRING IN SLICE
import authReducer from '../features/auth/authSlice'
import companyReducer from '../features/companies/companySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companyReducer,
  },
})



// import { configureStore } from '@reduxjs/toolkit'

// import authReducer from '../features/auth/authSlice'
// import goalReducer from '../features/goals/goalSlice'


// export const store = configureStore({
//   reducer: {
 
//     auth: authReducer,
//     goals: goalReducer

//   },
// });
