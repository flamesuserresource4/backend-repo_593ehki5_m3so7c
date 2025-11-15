import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('No MongoDB connection string provided (MONGO_URI or DATABASE_URL)');
  }
  try {
    await mongoose.connect(uri, {
      dbName: process.env.DATABASE_NAME || undefined,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
};

export default connectDB;
