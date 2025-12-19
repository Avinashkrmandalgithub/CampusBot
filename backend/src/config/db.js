import mongoose from "mongoose";


const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected.');
  } catch (error) {
    console.log('MongoDb connection error', error.message)
    process.exit(1);
  }
}

export default connectToDb;
