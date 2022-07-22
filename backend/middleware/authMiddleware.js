// Middleware to protect routes  
// run during a request response cycle

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protect = asyncHandler(async (req, res, next) => {
  let token

  // check the headers and if it starts with bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token as the ID is in the token and remove the pw
      req.user = await User.findById(decoded.id).select('-password')

      // call the next piece of middleware 
      next()

    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized, no token')
    }
  }

  // if no token at all
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }


