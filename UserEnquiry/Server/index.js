const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const enquiryRouters = require("./App/Routers/web/enquiryRouter");
require("dotenv").config();

app.use(express.json());

app.use("/enquiry/", enquiryRouters);

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connect to the mangoDB database");
    app.listen(process.env.PORT, () => {
      console.log("Server running port no at : ", process.env.PORT); //http://localhost:8020
    });
  })
  .catch((err) => {
    console.log("Failed to conned to the DB!", err);
  });
