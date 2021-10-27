import { connect } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = () => connect(MONGODB_URI);
