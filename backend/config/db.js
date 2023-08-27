const mongoose = require("mongoose");

// const

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://maheshsolanke84:root@taskmernapp.a12bgzd.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
