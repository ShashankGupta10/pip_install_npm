import mongoose from "mongoose";
let isConnected = false;
const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGO_DB_URI) return console.log("Missing MONGODB_URL");
  if (isConnected) return console.log("MONGODB is already connected!");
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "hacks",
    });
    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
