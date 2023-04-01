const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
    console.log("process.env.MONGO_URI", process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;