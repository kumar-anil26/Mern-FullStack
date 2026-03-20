const mongoose = require("mongoose");

// Cache the connection to avoid limits in serverless environments
let isConnected = false;

const connectDBConnection = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectDBConnection;
