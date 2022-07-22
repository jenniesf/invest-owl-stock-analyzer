const express = require('express')
const router = express.Router()
// bring in controller for reach route
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

// POST request to add a user
router.post('/', registerUser)
// POST to log in a user
router.post('/login', loginUser)
// GET to get user data -- add protect function from auth middleware to protect the route
router.get('/me', protect, getMe)


module.exports = router



