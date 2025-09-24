const express = require("express");
const {
  enquiryInsert,
  enquiryHome,
  enquiryList,
  enquiryDelete,
  enquiryEdit,
  enquiryUpdate,
} = require("../../Container/web/userEnquiry");

const enquiryRouters = express.Router();

enquiryRouters.get("/", enquiryHome);

enquiryRouters.post("/insert", enquiryInsert);

enquiryRouters.get("/list", enquiryList);

enquiryRouters.get("/edit/:id", enquiryEdit);

enquiryRouters.put("/update/:id", enquiryUpdate);

enquiryRouters.delete("/delete/:id", enquiryDelete);

module.exports = enquiryRouters;
