// ASYNC HANDLING USED; NO NEED TO USE TRY CATCH
const asyncHandler = require('express-async-handler')


// BRING IN MODELS/SCHEMAS
  // variables will have mongo methods to use
const Company = require('../models/companyModel')
const User = require('../models/userModel')


// @desc    Get companies
// @route   GET /api/companies
// @access  Private
const getCompanies = asyncHandler(async (req, res) => {
  // get companies from database
    // since this is protected w/ token, use ID from token to search and find by ID and respond
  const companies = await Company.find({ user: req.user.id })
  // const goals = await Goal.find({ user: req.user.id })
  // res.status(200).json(goals)
  res.status(200).json(companies)
  // res.status(200).json({message: 'get companies'})
})


// @desc    Set company
// @route   POST /api/companies
// @access  Private
const setCompany = asyncHandler(async (req, res) => {
  // console.log(req.body)

  // check if request includes a CIK
  if (!req.body.cik || !req.body.reportingPeriod) {
      res.status(400)
      // use express error handler
      throw new Error('Please complete fields')
  }
  
  // GET FILING INFORMATION FROM USER BODY
  const cik = req.body.cik
  const reportingPeriod = req.body.reportingPeriod

  // FETCH FILING DATA & COMPANY FILING NAME
  let data = await getFilingInformation( cik, reportingPeriod )
  let companyFilingName = await getCompanyName( cik )


  // IF NO FILING DATA COMES BACK
  if (!data || data.length === 0 ) {
    res.status(400)
    // use express error handler
    throw new Error('No filing found')
  }

  // Need to set a user ID for each company search. 
    // Since route is protected, User ID provided in token
  const company = await Company.create({
      cik: req.body.cik,
      reportingPeriod: req.body.reportingPeriod,
      filingInfo: data,
      companyFilingName: companyFilingName,
      user: req.user.id,
  })
  res.status(200).json(company)
  console.log(company)

})


// FUNCTION TO GET INVESTMENT FILING DATA
const getFilingInformation = async ( CIK , date  ) => {
  let url = `https://financialmodelingprep.com/api/v3/form-thirteen/${CIK}?date=${date}&apikey=${process.env.API_KEY_FMP}`
  try {
    const res = await fetch(url)
    const data = await res.json()  
    return data
  }
  catch (err) {
    console.error( err )
  }
};

// FUNCTION TO GET COMPANY NAME FROM CIK
const getCompanyName = async ( CIK ) => {
  let url = `https://financialmodelingprep.com/api/v3/cik/${CIK}?apikey=${process.env.API_KEY_FMP}`
  try {
    const res = await fetch(url)
    const data = await res.json()  
    return data[0].name
  }
  catch (err) {
    console.error( err )
  }
};


// @desc    Update company
// @route   PUT /api/companies/:id
// @access  Private
const updateCompany = asyncHandler(async (req, res) => {
  // get _id from the URL & find object in database using id
  const company = await Company.findById(req.params.id)
  // if company null/falsey
  if (!company) {
      res.status(400)
      throw new Error('Company not found')
  }


  // FIND USER USING ID FROM TOKEN 
        // const user = await User.findById(req.user.id)
     
        // Check for user provided in the request from frontend
        if (!req.user) {
          res.status(401)
          throw new Error('User not found')
        }
        // Make sure the logged in user matches the company user
        if (company.user.toString() !== req.user.id) {
          res.status(401)
          throw new Error('User not authorized')
        }

      

  const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
  })

  // respond with the updated company
  res.status(200).json(updatedCompany)
  
})



// @desc    Delete company
// @route   DELETE /api/companies/:id
// @access  Private
const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)
  
  if (!company) {
    res.status(400)
    throw new Error('Company not found')
  }


          // FIND USER FROM ID PROVIDED IN TOKEN
          // const user = await User.findById(req.user.id)
              
          // Check for user -- provided from the request in the frontend
          if (!req.user) {
            res.status(401)
            throw new Error('User not found')
          }
          // Make sure the logged in user matches the goal user
          if (company.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error('User not authorized')
          }
          



  // remove company
  await company.remove()

  res.status(200).json({id: req.params.id})
  

})

module.exports = {
  getCompanies,
  setCompany,
  updateCompany,
  deleteCompany,
}
