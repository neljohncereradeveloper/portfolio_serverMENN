import mongoose from "mongoose";
import { logger } from "../utils";

const dbconnect = async () => {
  try {
    await mongoose.connect(`${process.env.DB_HOST}`);
    logger.info("MongoDB Connected");
  } catch (error) {
    logger.error("Could not connect to MongoDB");
    process.exit(1);
  }
};

export default dbconnect;
