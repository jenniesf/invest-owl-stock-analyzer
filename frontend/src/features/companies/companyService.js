
import axios from 'axios'

// BACKEND ROUTE -- updated proxy
const API_URL = '/api/companies/'

// Create new company
const createCompany = async (companyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, companyData, config)

  return response.data
}

// Get user companies -- GET ALL COMPANIES
const getCompanies = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user's company - DELETE ONE COMPANY REQUESTED BY USER. 
  // Make request to backend, ID provided from frontend redux state
const deleteCompany = async (companyId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + companyId, config)

  return response.data
}

const companyService = {
  createCompany,
  getCompanies,
  deleteCompany,
}

export default companyService




