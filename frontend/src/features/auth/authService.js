// Service file to do all the http requests/stuff
  // and sending data back and setting data in localStorage

import axios from 'axios'

// ROUTE TO THE REGISTER BACKEND PAGE: 
  // updated the proxy in package json 
const API_URL = '/api/users/'

// Register user
  // userData is data that gets passed in here
  // save the data to localStorage
  // return response data that will include the token
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// LOGIN USER
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// LOGOUT USER
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService



