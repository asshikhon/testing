import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

// call on the client site this url
http://localhost:3000/api/user/updateRole?email=sarajitmondal012@gmail.com
// Connect to the database
connectDB();

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // Extract search parameters from the request URL
    const email = searchParams.get("email"); // Get the email query parameter

    if (!email) {
      return NextResponse.json({ message: 'Email parameter is required' }, { status: 400 });
    }

    const body = await req.json(); // Parse the request body to get the new role
    const { role } = body; // Extract the role from the request body

    if (!role) {
      return NextResponse.json({ message: 'Role field is required' }, { status: 400 });
    }

    // Find the user by email and update their role
    const updatedUser = await User.findOneAndUpdate(
      { emailAddresses: email }, // Find user by email (update with your actual field)
      { role }, // Update the role
     
    );

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User role updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
