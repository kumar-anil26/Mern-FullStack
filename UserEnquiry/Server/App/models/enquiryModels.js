const mongoose = require("mongoose");

const userEnquirymodel = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: String,
    required: true,
    unique: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

const enquiryModel = mongoose.model("enquiry", userEnquirymodel);

module.exports = enquiryModel;
