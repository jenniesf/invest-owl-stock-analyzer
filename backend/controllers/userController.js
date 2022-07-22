const jwt = require('jsonwebtoken')
// BCRYPT TO HASH PW
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc    REGISTER A NEW USER
// @route   POST /api/users
// @access  Public - cant log in with being a user and cant be a user w/o registering
const registerUser = asyncHandler(async (req, res) => {
  
  // Destructure data from req.budy
  const { name, email, password } = req.body
  // if request body empty - from controller - return error
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user email already exists in database 
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
    // create a salt to hash, 10 rounds (default)
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user - create method from User model
    // use the hashedPW for the PW
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  // check if user was created - send status repsonse and data back
    // and generate a token with user ID in the payload
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }

  // res.json({message: 'Register User'})
})


// @desc    AUTHENTICATE A USER (LOGIN)
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  // Destructure data from the frontend in req.body
  const { email, password } = req.body

  // Check for user email in database
  const user = await User.findOne({ email })

  // match passwords - use bcrypt to compare user inputted pw and hashedpw already saved into database
    // generate a token with the ID in the payload
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
  // res.json({message: 'Login User'})
})


// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
    // this route is protected with auth middleware/token
    // request passing in is the token which has user ID
const getMe = asyncHandler(async (req, res) => {
  // res.json({message: 'get User display'})

  res.status(200).json(req.user)
})


// Generate a token using JWT imported at the top
  // use ID as parament and put into the payload
  // set to expire in 30days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}


module.exports = {
  registerUser,
  loginUser,
  getMe,
}


