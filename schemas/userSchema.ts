// /schemas/userSchema.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl : string;
  password: string;
  role : string;
  // Add other fields as needed
}

const userSchema = new Schema<IUser>({
  emailAddresses: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true },
  imageUrl: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
  // Define other fields
});

// Use mongoose.models to check if the model already exists, to prevent overwriting
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);


export default User;
