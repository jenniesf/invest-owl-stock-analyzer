

// CONNECT TO MONGO DB AND UTLIZE COLORS

// bring in mongoose
const mongoose = require('mongoose')

const connectDB = async ( ) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log( error)
        // to termine prcoess synchronously
        process.exit(1)
    }
}


module.exports = connectDB