import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const IndustrySolutionsSection: React.FC = () => {
  const buttonHover = {
    scale: 1.15,
    transition: { type: "spring", stiffness: 250 },
  };

  // Card animation
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const cards = [
    { icon: '🎓', title: 'Education' },
    { icon: '💰', title: 'Financial Services' },
    { icon: '🏛️', title: 'Government' },
    { icon: '🏥', title: 'Healthcare' },
    { icon: '🏭', title: 'Manufacturing' },
    { icon: '🏷️', title: 'Retail' },
  ];

  return (
    <section className="flex flex-col lg:flex-row container mx-auto items-center py-16 gap-8 text-white rounded-xl bg-[#184e47]">
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: false, amount: 0.5 }}
         className="text-center mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Empowering Communication with ChatVibe
        </h2>
        <p className="text-lg">
          ChatVibe makes seamless communication possible through video calls, audio meetings, 
          and instant messaging. Whether you're hosting online classes, financial briefings, 
          government meetings, or healthcare consultations, our platform keeps you connected anytime, anywhere.
        </p>

        {/* Explore Button */}
        <motion.div whileHover={buttonHover} className="inline-block mt-6">
          <Button className="border text-white hover:border-none px-7 hover:bg-main-2 transition-all duration-200 ease-in-out">
            Explore ChatVibe Solutions
          </Button>
        </motion.div>
      </motion.div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
  {cards.map((card, index) => (
    <motion.div
      key={index}
      className="flex items-center justify-center border border-gray-200 rounded-lg p-6 hover:shadow-lg transition h-full"
      initial="hidden"
      whileInView="visible"
      variants={cardAnimation}
      custom={index}
    >
      <div className="flex flex-col items-center text-center w-full">
        <div className="mb-4">
          <span className="text-4xl">{card.icon}</span>
        </div>
        <h3 className="text-base text-white truncate w-full max-w-full">
          {card.title}
        </h3>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default IndustrySolutionsSection;
