import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../ShareComponents/SectionContainer";

const Conversations = () => {

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeInOut" } },
    hover: { rotate: 10, scale: 1.1, transition: { duration: 0.4 } },
  };

  const buttonHover = {
    scale: 1.1,
    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
    transition: { duration: 0.3 },
  };

  return (
    <SectionContainer>
      <div className="flex flex-col-reverse md:flex-row justify-around gap-8 items-center">
     
        <motion.div
          className="flex flex-col justify-center md:flex-1 lg:flex-initial"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <h3 className="text-main-1 font-semibold pb-2">
            Communicate-Share Ideas-Save Time
          </h3>
          <h2 className="text-4xl font-bold">
            <span className="text-main-1">Secure</span>{" "}
            <span className="text-white">Conversations</span>
          </h2>
          <p className="text-base text-gray-300 lg:w-[500px] pt-4">
            Many of the poses, such as downward dog, upward dog, and the plank
            pose, build upper-body strength. The standing poses, especially if
            you hold them for several long breaths.
          </p>
          <motion.button
            className="p-2 md:py-2 md:px-4 rounded-lg hover:bg-main-3 transition duration-300 border-0 text-white text-base mt-4 bg-main-2"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

     
        <motion.div
          className="flex-1 lg:flex-initial"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          whileHover="hover"
        >
          <Image
            src={`https://i.ibb.co.com/9YQvyS2/bg.jpg`}
            alt="Secure Conversations"
            className="h-full lg:w-[460px] lg:h-[460px] mt-6 object-cover border-0 rounded-full md:ml-auto lg:ml-0"
            width={540}
            height={540}
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Conversations;
