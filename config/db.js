const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://somesh:somesh2004@cluster0.5gr5t46.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
    z;
  }
};

module.exports = connectDB;
