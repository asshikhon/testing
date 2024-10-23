import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/schemas/userSchema';

// Make sure to connect to the database
connectDB();
// Handle GET request for fetching a single user by ID

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
     // Check if the user already exists
    const userEmail = body.emailAddresses;
    const userExists = await User.findOne({ emailAddresses: userEmail });

    if (userExists) {
      // Return a 409 conflict status code if user already exists
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }
    
    const newUser = new User(body); // Create a new user
    await newUser.save(); // Save the user to the database
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
