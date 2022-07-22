
// to overwrite default express error handler  
const errorHandler = (err, req, res, next) => {
    // if response status code is available use it; otherwise use 500
    const statusCode = res.statusCode ? res.statusCode : 500
    // pass in statusCode
    res.status(statusCode)
    // respond with JSON
    res.json({
      message: err.message,
      // show stack error only if in production
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  module.exports = {
    errorHandler,
  }

