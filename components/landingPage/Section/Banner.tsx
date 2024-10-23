"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionContainer from "../ShareComponents/SectionContainer";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      text: "Get a Link You can share",
      description: "Click new meeting to create a new meeting and share the link",
      img: "https://i.ibb.co/SfpWJdQ/images.jpg",
    },
    {
      text: "Connect with anyone",
      description: "Invite your team members to join the meeting via a shared link.",
      img: "https://i.ibb.co/ynh16GR/memory.png",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="overflow-x-hidden">
      <SectionContainer>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly">

          <motion.div
            className="h-full flex flex-col justify-center text-left md:p-4 lg:p-4 lg:mr-4 space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }} 
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Meeting and Video Call for <br />
              Everyone with
              <span className="text-main-1"> ChatVibe</span>
            </h1>
            <motion.div
  className="flex justify-center w-full"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link
    href="/dashboard"
    className="w-full text-center bg-main-2 text-white p-2 md:py-2 md:px-4 rounded-lg hover:bg-main-3 transition duration-300"
  >
    Try Now
  </Link>
</motion.div>

            <p className="mt-10 text-gray-300">
              Learn more about{" "}
              <a href="#" className="text-main-1 hover:underline">
                Our team.
              </a>
            </p>
          </motion.div>

       
          <motion.div
            className="flex-1 h-[500px] max-w-full md:max-w-[620px] pb-12 lg:max-w-[720px] lg:ml-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-[#d9d9d9] p-6 rounded-lg shadow-lg h-full flex flex-col justify-center space-y-4"
              key={activeSlide}
              custom={1} 
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Image
                width={208}
                height={208}
                src={slides[activeSlide].img}
                alt={slides[activeSlide].text}
                className="w-52 h-52 rounded-full mx-auto"
              />
              <p className="mt-4 text-center text-black font-semibold">
                {slides[activeSlide].text}
              </p>
              <p className="mt-2 text-center text-sm text-gray-600">
                {slides[activeSlide].description}
              </p>
            </motion.div>
            <div className="flex justify-between mt-4">
              <span
                onClick={() =>
                  setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
                }
                className="text-main-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
              <span
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % slides.length)
                }
                className="text-main-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Banner;
