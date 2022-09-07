const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connecting successful !!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
