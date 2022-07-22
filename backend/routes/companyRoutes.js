const express = require('express')
const router = express.Router()
// BRING IN CONTROLLERS, WHERE ROUTES AND REQUESTS ARE
const {
  getCompanies,
  setCompany,
  updateCompany, 
  deleteCompany,
} = require('../controllers/companyController')

const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)


// CONNECT BACKEND ROUTES
  // protect routes so each request is associated to a user via token
router.route('/').get( protect, getCompanies ).post( protect, setCompany )
router.route('/:id').put( protect, updateCompany ).delete( protect, deleteCompany )

    // router.get('/', getCompanies )
      // router.get('/' , (req, res) => {
      //   res.status(200).json({message: 'get companies'})
      // })
    // router.post('/' , setCompany)
    // router.put('/:id' , updateCompany)
    // router.delete('/:id' , deleteCompany )


module.exports = router




