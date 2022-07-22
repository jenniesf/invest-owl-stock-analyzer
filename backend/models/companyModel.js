// DEFINE SCHEMA -company requested from user

const mongoose = require('mongoose')

// include a user, each company should be associated to the user requesting and their ID
  // add ref field to User
const companySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    companyFilingName: {
      type: String
    },
    cik: {
      type: String,
      required: [true, 'Please add a CIK'],
    },
    reportingPeriod: {
      type: String,
      required: [true, 'Please add a reporting period'],
    },
    filingInfo: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
)


module.exports = mongoose.model('Company', companySchema)


