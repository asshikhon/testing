'use client'
import React, { useEffect } from "react";
import Communication from "@/components/landingPage/Section/Communication";
import AboutUs from "@/components/landingPage/Section/AboutUs";
import Banner from "@/components/landingPage/Section/Banner";
import Conversations from "@/components/landingPage/Section/Conversations";
import { useUser } from "@clerk/clerk-react";
import saveUserApi from "@/utilities/api-call/saveUserApi";
import Ready from "@/components/landingPage/Section/Ready";
import ScreenRecording from "@/components/landingPage/Section/ScreenRecording";
import IndustrySolutionsSection from "@/components/landingPage/Section/IndustrySolutionsSection";


const LandingPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
 useEffect(()=>{
  if(isSignedIn && isLoaded && user){
 saveUserApi(user)
  }
  },[user])
  return (
    <div>
      <Banner />
      <Communication />
      <ScreenRecording />
      <Conversations />
      <IndustrySolutionsSection />
      <AboutUs />
     <Ready />
    </div>
  );
};

export default LandingPage;
