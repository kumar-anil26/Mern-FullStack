const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDBConnection = require("./models/MongoDBConnection");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "https://personal-dashboard-theta-two.vercel.app", // Your main production URL
  "https://personal-dashboard-owe18r2kr-kumar-anil26s-projects.vercel.app", // The preview URL from the error
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like postman or curl) or if the origin is in our array
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

connectDBConnection();

app.use("/projects", require("./routes/projectRoutes"));
app.use("/skills", require("./routes/skillRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
