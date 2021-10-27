import { connect } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (!cached.promise) {
    cached.promise = connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.connection = await cached.promise;
  return cached.connection;
};
