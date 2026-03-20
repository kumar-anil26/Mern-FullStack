const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDBConnection = require("./models/MongoDBConnection");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "https://personal-dashboard-theta-two.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

connectDBConnection();

app.use("/projects", require("./routes/projectRoutes"));
app.use("/skills", require("./routes/skillRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
