import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";


connectDB()

// Handle GET requests
export async function GET() {
  try {
    const users = await User.find(); // Fetch all users
    return NextResponse.json(users,  { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
