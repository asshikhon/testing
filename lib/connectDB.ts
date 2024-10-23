import mongoose from 'mongoose';

// Define an async function to connect to MongoDB
const connectDB = async (): Promise<void> => {
  // Define the MongoDB connection URL from environment variables and assert it's a string
  const url: string = process.env.MONGODB_URL as string;

  // Check if the URL is valid
  if (!url) {
    throw new Error('MongoDB connection URL is missing from environment variables');
  }

  try {
    // Avoid multiple connections by checking the readyState
    if (mongoose.connection.readyState >= 1) return;

    // Connect to MongoDB with the provided URL
    await mongoose.connect(url);

    // console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default connectDB;


