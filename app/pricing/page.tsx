'use client'
import SectionContainer from "@/components/landingPage/ShareComponents/SectionContainer";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <SectionContainer>
      <div className='container mx-auto p-6 overflow-x-auto text-white'>
        <table className='w-full'>
          <caption className='sr-only'>Pricing plan comparison</caption>
          <thead className="mb-12">
            <motion.tr
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <th></th>
              <th
                scope='col'
                className='transition-transform transform hover:scale-105 duration-300 ease-in-out'
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className='px-2 text-lg font-medium'>Starter</h2>
                  <p className='mb-3'>
                    <span className='text-2xl font-bold sm:text-4xl'>0$</span>
                    <span className='font-medium'>/mon</span>
                  </p>
                  <button
                    disabled
                    className='mb-4 px-4 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300'
                  >
                    Free
                  </button>
                </motion.div>
              </th>
              <th
                scope='col'
                className='transition-transform transform hover:scale-105 duration-300 ease-in-out'
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className='px-2 text-lg font-medium'>Standard</h2>
                  <p className='mb-3'>
                    <span className='text-2xl font-bold sm:text-4xl dark:text-gray-900'>19$</span>
                    <span className='font-medium'>/mon</span>
                  </p>
                  <button className='mb-4 px-2 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300'>
                    Buy Now
                  </button>
                </motion.div>
              </th>
              <th
                scope='col'
                className='transition-transform transform hover:scale-105 duration-300 ease-in-out'
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className='px-2 text-lg font-medium'>Premium</h2>
                  <p className='mb-3'>
                    <span className='text-2xl font-bold sm:text-4xl'>49$</span>
                    <span className='font-medium dark:text-gray-600'>/mon</span>
                  </p>
                  <button className='mb-4 px-2 py-2 bg-main-2 text-base font-medium text-white rounded-lg shadow hover:bg-main-3 transition-colors duration-300'>
                    Buy Now
                  </button>
                </motion.div>
              </th>
            </motion.tr>
          </thead>
          <tbody className='space-y-6 text-center divide-y mt-12 dark:divide-gray-300'>
            {[
              { title: "Video Call Minutes", values: ["100 min", "500 min", "Unlimited"] },
              { title: "Storage", values: ["0.5 GB", "10 GB", "100 GB"] },
              { title: "High-Quality Video", values: [true, true, true] },
              { title: "Multi-User Calls", values: [false, true, true] },
            ].map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='hover:bg-[#227670] transition duration-300 ease-in-out'
              >
                <th scope='row' className='text-left'>
                  <h3 className='py-3'>{row.title}</h3>
                </th>
                {row.values.map((value, i) => (
                  <td key={i}>
                    {typeof value === "boolean" ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-label={value ? "Included" : "Not included"}
                        className='w-5 h-5 mx-auto'
                      >
                        <path
                          fillRule='evenodd'
                          d={
                            value
                              ? "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              : "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          }
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    ) : (
                      <span className='block text-sm'>{value}</span>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionContainer>
  );
};

export default page;
