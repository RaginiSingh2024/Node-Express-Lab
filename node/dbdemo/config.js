import mongoose from "mongoose";

export const SECRET_KEY = process.env.SECRET_KEY;

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
