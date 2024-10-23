"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Ready = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300, 
        damping: 15,
        staggerChildren: 0.25,
      },
    },
  };

  const svgAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        bounce: 0.7,
      },
    },
  };

  const buttonHover = {
    scale: 1.15,
    transition: { type: "spring", stiffness: 250 },
  };

  return (
    <motion.div
      className="bg-[#184e47] text-white py-24 text-center container mx-auto rounded-xl relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} 
      variants={containerVariants}
    >
   
      <motion.svg
        className="absolute hidden lg:block left-[12%] top-[6%] rotate-[-4deg]"
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="258"
        viewBox="0 0 380 258"
        fill="none"
        variants={svgAnimation}
      >
        <motion.path
                 d="M1.15696 116.677C-0.0775527 117.118 0.531138 119.767 1.91386 119.97L39.761 125.548C40.7566 125.695 41.4997 127.288 41.0501 128.31L35.3956 141.152C35.1179 141.782 35.2896 142.717 35.7981 143.345L52.1397 163.559C52.5221 164.032 53.0217 164.237 53.4344 164.09L68.0818 158.847C68.1248 158.831 68.169 158.819 68.2149 158.812C68.2473 158.805 68.2803 158.803 68.3133 158.801L95.1563 157.419C96.465 157.353 97.3516 159.851 96.2905 160.615L61.8171 185.456C61.2036 185.898 61.1982 187.111 61.8044 187.966L74.8402 206.348C75.327 207.035 75.4346 207.989 75.09 208.566L47.5981 254.578C46.8972 255.751 48.0897 257.844 49.2263 257.437L378.925 139.422C380.062 139.015 379.655 136.64 378.369 136.178L327.923 118.064C327.29 117.837 326.768 117.032 326.709 116.192L325.118 93.7129C325.044 92.6669 324.27 91.733 323.515 91.7807L281.109 94.4593C279.804 94.5424 278.904 92.0485 279.957 91.2695L301.58 75.3034C301.644 75.2553 301.714 75.2178 301.788 75.1914L316.435 69.9484C316.848 69.8007 317.104 69.3252 317.099 68.7169L316.901 42.7243C316.895 41.9156 316.435 41.0848 315.82 40.7738L303.301 34.437C302.305 33.9325 301.868 32.2303 302.544 31.4843L328.255 3.15602C329.194 2.1218 327.984 -0.311419 326.75 0.130476L1.15696 116.677Z"
          fill="#238075"
          variants={svgAnimation}
        />
      </motion.svg>

      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold mb-3"
        variants={containerVariants}
      >
        Ready To Get Started?
      </motion.h2>

      <motion.p
        className="font-medium"
        variants={containerVariants}
      >
        Let’s start your video meeting today
      </motion.p>

      {/* Button with Hover Animation */}
      <Link href={`/dashboard`}>
        <motion.div whileHover={buttonHover} className="inline-block mt-6">
          <Button className="border text-white hover:border-none px-7 hover:bg-main-2 transition-all duration-200 ease-in-out">
            Get Started
          </Button>
        </motion.div>
      </Link>

      {/* SVG Animation (Right) */}
      <motion.svg
        className="absolute hidden lg:block right-[19%] top-[50%] rotate-[8deg]"
        xmlns="http://www.w3.org/2000/svg"
        width="189"
        height="111"
        viewBox="0 0 189 111"
        fill="none"
        variants={svgAnimation}
      >
        <motion.path
         d="M0.635388 60.9595C-0.00412167 61.1884 0.158965 62.1352 0.838196 62.1367L19.4283 62.1887C19.9173 62.1904 20.2035 62.7396 19.9249 63.1412L16.4212 68.1888C16.2491 68.4366 16.2852 68.7727 16.5056 68.9781L23.5868 75.5826C23.7525 75.7372 23.9909 75.7864 24.2047 75.7099L31.7924 72.9939C31.8147 72.9859 31.8374 72.979 31.8607 72.9738C31.8772 72.9698 31.8938 72.967 31.9103 72.9649L45.3788 71.0284C46.0354 70.9342 46.3451 71.8109 45.7751 72.1495L27.253 83.1629C26.9235 83.3589 26.8563 83.8075 27.1134 84.0916L32.6422 90.1944C32.8487 90.4224 32.8518 90.7692 32.6491 91.0008L16.4866 109.47C16.0746 109.941 16.5585 110.651 17.1473 110.44L187.94 49.305C188.529 49.0942 188.452 48.238 187.835 48.1356L163.623 44.1186C163.32 44.0681 163.102 43.7982 163.117 43.491L163.517 35.2659C163.535 34.8832 163.199 34.5791 162.82 34.6368L141.516 37.879C140.86 37.979 140.543 37.105 141.111 36.7611L152.749 29.7107C152.783 29.6895 152.82 29.6719 152.858 29.6583L160.446 26.9423C160.66 26.8657 160.813 26.6763 160.843 26.4518L162.124 16.8538C162.164 16.5552 161.979 16.2725 161.689 16.1902L155.778 14.5126C155.307 14.379 155.18 13.773 155.557 13.4613L169.891 1.62407C170.415 1.19185 169.94 0.35666 169.301 0.585573L0.635388 60.9595Z"
          fill="#238075"
          variants={svgAnimation}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Ready;
