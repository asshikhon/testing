import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../ShareComponents/SectionContainer";

const Communication = () => {

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: "easeInOut" } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } 
    },
  };

  const buttonHover = {
    scale: 1.1,
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        {/* Image with animation */}
        <motion.div
          className="md:flex-1 lg:flex-initial"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <Image
          loading="lazy"
            src={`/images/discussion-section-img.webp`}
            alt="Secure Conversations"
            className="max-w-full mt-6 object-cover border-0 rounded-xl"
            width={580}
            height={580}
          />
        </motion.div>


        <motion.div
          className="flex flex-col justify-center md:flex-1 lg:flex-initial"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold">
            <span className="text-main-1">Communication</span>{" "}
            <span className="text-white">with Live Discussions</span>
          </h2>
          <p className="text-base text-white lg:w-[500px] pt-4">
            Discuss directly with the team, you can send document files for the
            next level of collaboration.
          </p>
          <motion.button
            className="p-2 md:py-2 md:px-4 rounded-lg hover:bg-main-3 transition duration-300 border-0 text-white text-base mt-4 bg-main-2"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Communication;
