// DEPENDENCIES
const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors')

// BRING IN ERROR HANDLER
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;
const app = express();

// RUN DATABASE CONNECTION
const connectDB = require('./config/db');
connectDB();

// MIDDLEWARE
app.use(cors())
app.use(express.json());    // use body parser for json
app.use(express.urlencoded({ extended: false })); 

// app.use('/api/goals', require('./routes/goalRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// CONNECT BACKEND ROUTES
    // path starting /api/xxx
app.use('/api/companies' , require('./routes/companyRoutes'))
    // app.get('/api/company' , (req, res) => {
    //     res.status(200).json({message: 'get companies'})
    // })

    // path to connect routes -- /api/users
app.use('/api/users' , require('./routes/userRoutes'))





// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

// USER OUR ERRORHANDLER CREATED; WHICH WILL OVERRIDE DEFAULT EXPRESS ERROR HANDLER
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));






