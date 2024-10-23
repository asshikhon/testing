"use client";
import { UserResource } from "@clerk/types";
import axios from "axios";
const saveUserApi = async (user: UserResource) => {
  const emailAddresses = user?.emailAddresses[0].emailAddress;
  const { firstName, lastName, fullName, imageUrl } = user || {};

  const userData = {
    emailAddresses,
    firstName,
    lastName,
    fullName,
    imageUrl,
  };

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/save`,
      userData
    );
    // if (res.status === 201) {
    //   console.log("User saved to MongoDB");
    // }
  } catch (error) {
    console.error("Error saving user to DB", error);
  }
};

export default saveUserApi;
